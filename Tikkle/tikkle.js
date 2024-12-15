function computeTotalRevenue(sales, pricing) {
    let totalRevenue = 0;

    sales.forEach(sale => {
        const ticketType = sale.type;
        const ticketsSold = sale.sold;

        if (pricing[ticketType] !== undefined) {
            totalRevenue += pricing[ticketType] * ticketsSold;
        }
    });

    return totalRevenue;
}

// Example usage:
const pricing = { vip: 100, regular: 80, balcony: 50 };
const sales = [{ type: 'vip', sold: 53 }, { type: 'regular', sold: 87 }];

const revenue = computeTotalRevenue(sales, pricing);
console.log(revenue); // Output: 12260




