// Stock ticker with psychedelic effects
const stocks = new Map();
let updateInterval = null;

// Demo stock data for when no API key is provided
const demoStocks = {
    'AAPL': { price: 175.43, change: 2.15, changePercent: 1.24, volume: 45234567 },
    'TSLA': { price: 248.50, change: -5.20, changePercent: -2.05, volume: 78923456 },
    'GOOGL': { price: 142.30, change: 1.45, changePercent: 1.03, volume: 23456789 },
    'MSFT': { price: 378.85, change: 3.25, changePercent: 0.87, volume: 34567890 },
    'AMZN': { price: 151.94, change: -1.20, changePercent: -0.78, volume: 45678901 },
    'NVDA': { price: 875.00, change: 12.50, changePercent: 1.45, volume: 56789012 }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('addStockBtn');
    const clearBtn = document.getElementById('clearBtn');
    const symbolInput = document.getElementById('symbolInput');

    addBtn.addEventListener('click', addStock);
    clearBtn.addEventListener('click', clearAll);
    symbolInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addStock();
        }
    });

    // Add some demo stocks on load
    setTimeout(() => {
        ['AAPL', 'TSLA', 'GOOGL'].forEach(symbol => {
            addStockBySymbol(symbol);
        });
    }, 500);
});

function addStock() {
    const symbolInput = document.getElementById('symbolInput');
    const symbol = symbolInput.value.trim().toUpperCase();
    
    if (!symbol) {
        showError('Please enter a stock symbol');
        return;
    }
    
    if (stocks.has(symbol)) {
        showError(`${symbol} is already being tracked`);
        return;
    }
    
    addStockBySymbol(symbol);
    symbolInput.value = '';
}

function addStockBySymbol(symbol) {
    stocks.set(symbol, { 
        price: 0, 
        change: 0, 
        changePercent: 0,
        volume: 0,
        previousPrice: 0
    });
    
    createStockCard(symbol);
    updateStock(symbol);
}

function createStockCard(symbol) {
    const stockList = document.getElementById('stockList');
    const card = document.createElement('div');
    card.className = 'stock-card';
    card.id = `stock-${symbol}`;
    card.innerHTML = `
        <div class="stock-symbol">${symbol}</div>
        <div class="stock-price" id="price-${symbol}">Loading...</div>
        <div class="stock-change" id="change-${symbol}">--</div>
        <div class="stock-details">
            <span id="percent-${symbol}">--</span>
            <span id="volume-${symbol}">Volume: --</span>
        </div>
    `;
    stockList.appendChild(card);
    
    // Add psychedelic animation delay
    const delay = stocks.size * 100;
    card.style.animationDelay = `${delay}ms`;
}

async function updateStock(symbol) {
    const apiKey = document.getElementById('apiKeyInput').value.trim();
    let stockData;
    
    if (apiKey) {
        stockData = await fetchStockData(symbol, apiKey);
    } else {
        // Use demo data
        stockData = getDemoStockData(symbol);
    }
    
    if (stockData) {
        updateStockDisplay(symbol, stockData);
    }
}

async function fetchStockData(symbol, apiKey) {
    try {
        // Using Alpha Vantage API
        const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
        
        // Note: Alpha Vantage has CORS restrictions, so we'll use a proxy
        // For production, you'd want to set up your own backend proxy
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        
        const response = await fetch(proxyUrl);
        const data = await response.json();
        
        if (data.contents) {
            const quote = JSON.parse(data.contents);
            
            if (quote['Error Message']) {
                throw new Error(quote['Error Message']);
            }
            
            if (quote['Note']) {
                // API call frequency limit
                return getDemoStockData(symbol);
            }
            
            const quoteData = quote['Global Quote'];
            if (quoteData && quoteData['05. price']) {
                const price = parseFloat(quoteData['05. price']);
                const change = parseFloat(quoteData['09. change']);
                const changePercent = parseFloat(quoteData['10. change percent'].replace('%', ''));
                const volume = parseInt(quoteData['06. volume']);
                
                return { price, change, changePercent, volume };
            }
        }
        
        // Fallback to demo data if API fails
        return getDemoStockData(symbol);
    } catch (error) {
        console.error('Error fetching stock data:', error);
        return getDemoStockData(symbol);
    }
}

function getDemoStockData(symbol) {
    if (demoStocks[symbol]) {
        // Add some randomness to make it feel real-time
        const base = demoStocks[symbol];
        const randomFactor = (Math.random() - 0.5) * 0.02; // ±1% variation
        const price = base.price * (1 + randomFactor);
        const change = price - base.price;
        const changePercent = (change / base.price) * 100;
        
        // Update base price slightly for next update
        demoStocks[symbol].price = price;
        
        return {
            price: price,
            change: change,
            changePercent: changePercent,
            volume: base.volume + Math.floor(Math.random() * 1000000)
        };
    } else {
        // Generate random demo data for unknown symbols
        const basePrice = 50 + Math.random() * 200;
        const change = (Math.random() - 0.5) * 10;
        const price = basePrice + change;
        const changePercent = (change / basePrice) * 100;
        
        return {
            price: price,
            change: change,
            changePercent: changePercent,
            volume: Math.floor(Math.random() * 50000000)
        };
    }
}

function updateStockDisplay(symbol, data) {
    const stockInfo = stocks.get(symbol);
    if (!stockInfo) return;
    
    const previousPrice = stockInfo.price;
    stockInfo.price = data.price;
    stockInfo.change = data.change;
    stockInfo.changePercent = data.changePercent;
    stockInfo.volume = data.volume;
    
    const card = document.getElementById(`stock-${symbol}`);
    const priceEl = document.getElementById(`price-${symbol}`);
    const changeEl = document.getElementById(`change-${symbol}`);
    const percentEl = document.getElementById(`percent-${symbol}`);
    const volumeEl = document.getElementById(`volume-${symbol}`);
    
    // Add update animation
    card.classList.add('updating');
    setTimeout(() => card.classList.remove('updating'), 300);
    
    // Update price with animation
    priceEl.textContent = `$${data.price.toFixed(2)}`;
    priceEl.className = `stock-price ${data.change >= 0 ? 'positive' : 'negative'}`;
    
    // Update change
    const changeSign = data.change >= 0 ? '+' : '';
    changeEl.textContent = `${changeSign}$${data.change.toFixed(2)}`;
    changeEl.className = `stock-change ${data.change >= 0 ? 'positive' : 'negative'}`;
    
    // Update percent
    percentEl.textContent = `${changeSign}${data.changePercent.toFixed(2)}%`;
    
    // Update volume
    volumeEl.textContent = `Volume: ${formatNumber(data.volume)}`;
    
    // Store previous price for next update
    stockInfo.previousPrice = previousPrice || data.price;
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function clearAll() {
    stocks.clear();
    const stockList = document.getElementById('stockList');
    stockList.innerHTML = '';
    
    if (updateInterval) {
        clearInterval(updateInterval);
        updateInterval = null;
    }
}

function startUpdates() {
    if (updateInterval) return;
    
    updateInterval = setInterval(() => {
        stocks.forEach((data, symbol) => {
            updateStock(symbol);
        });
    }, 5000); // Update every 5 seconds
}

function showError(message) {
    // Simple error display (you could enhance this)
    alert(message);
}

// Start auto-updates
startUpdates();

// Add more psychedelic effects
function addPsychedelicEffects() {
    // Random color shifts
    setInterval(() => {
        const cards = document.querySelectorAll('.stock-card');
        cards.forEach(card => {
            const hue = Math.random() * 360;
            card.style.filter = `hue-rotate(${hue}deg)`;
        });
    }, 3000);
    
    // Random warping
    setInterval(() => {
        const container = document.querySelector('.container');
        const warp = Math.random() * 4 - 2;
        container.style.transform = `perspective(1000px) rotateX(${warp}deg)`;
    }, 5000);
}

// Start psychedelic effects
setTimeout(addPsychedelicEffects, 1000);

