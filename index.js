const parse = require('csv-parse');
const fs = require('fs');
const City = require('./Models/city');
const output = [];
let csvFile = 'Data/worldcities.csv';

class csv {
    static read_csv_file(csvFile, model) {
        fs.createReadStream(csvFile)
            .pipe(parse({
                columns: true,
                delimiter: ',',
                trim: true,
                skip_empty_lines: true
            })
                .on('readable', function(){
                    let record;
                    while (record = this.read()) {
                        console.log(record);
                        let mod = new model(record);
                        output.push(record);
                    }
                })
                // When we are done, test that the parsed output matched what expected
                .on('end', function(){

                    //  console.log(output);

                }));
    }
}
csv.read_csv_file(csvFile, City);

module.exports = csv;