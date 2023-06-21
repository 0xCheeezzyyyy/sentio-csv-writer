const fs = require('fs');
const { createObjectCsvWriter } = require('csv-writer');

// Read
const jsonData = fs.readFileSync('input.json','utf8');

// Prase Json Data
const data =  JSON.parse(jsonData);
console.log("data", data.entries)
const processedData = data.entries.map((entry) => entry.attributes)

// Define fields:
const fields = [
    {id: 'time', title: 'Timestamp'},
    { id: 'actionType', title: 'Action Type' },
    { id: 'pool', title: 'Pool' },
    { id: 'user', title: 'User' },
    { id: 'walletType', title: 'Wallet Type' },
    { id: 'taggedName', title: 'Tagged Name' },
    { id: 'tokensIn1', title: 'Tokens In 1' },
    { id: 'tokensInAmount1', title: 'Tokens In Amount 1' },
    { id: 'tokensOut1', title: 'Tokens Out 1' },
    { id: 'tokensOutAmount1', title: 'Tokens Out Amount 1' },
    { id: 'type', title: 'Type' },
    { id: 'valueUsd', title: 'Value USD' },
  ];

  // Create a CSV writer with the specified fields
const csvWriter = createObjectCsvWriter({
    path: 'output.csv',
    header: fields,
  });
  
  // Write the JSON objects into a CSV file
  csvWriter.writeRecords(processedData)
    .then(() => console.log('CSV file has been written successfully.'))
    .catch((err) => console.error('Error writing CSV file:', err));