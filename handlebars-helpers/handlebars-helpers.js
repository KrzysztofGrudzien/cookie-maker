const handlebarsHelpers = {
    'find-price': (entries, selectedType) => {
        const foundPrice = entries.find(entry => entry[0] === selectedType);
        if (!foundPrice) {
            throw new Error(`Cannot find price of "${selectedType}".`);
        }

        const [, price] = foundPrice;
        return price;
    },

    'price-fix': price => price.toFixed(2),
};

module.exports = {
    handlebarsHelpers,
};
