const bson = require("bson");
const tags = require("../2-tags/tags");

// filters out tag ids from an array of tag names
function filterTagIds(tagNames) {
    return tags.filter(tag => tagNames.includes(tag.name)).map(tag => tag._id);
}

// get the tag ids relating to billing team
const billingTagIds = filterTagIds(['payment', 'refunds', 'cancellation_fee', 'invoices']);

// get the tag ids relating to fulfillment team
const fulfillmentTagIds = filterTagIds(['shipping', 'delivery', 'order']);

// get the tag ids relating to accounts team
const accountsTagIds = filterTagIds(['account', 'feedback', 'newsletter', 'contact']);

const teams = [
    {
        _id: new bson.ObjectId('6032e937869b74468c21ffe0'),
        name: 'Billing',
        description: 'This is the billing team',
        colour: 'indigo',
        tags: billingTagIds
    },
    {
        _id: new bson.ObjectId('6032e937869b74468c21ffe1'),
        name: 'Fulfillment',
        description: 'This is the fulfillment team',
        colour: 'green',
        tags: fulfillmentTagIds
    },
    {
        _id: new bson.ObjectId('6032e937869b74468c21ffe2'),
        name: 'Accounts',
        description: 'This is the accounts team',
        colour: 'yellow',
        tags: accountsTagIds
    }
];

module.exports = teams;