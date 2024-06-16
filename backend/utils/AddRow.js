// Google sheet npm package
const { GoogleSpreadsheet } = require('google-spreadsheet');
// File handling package
const fs = require('fs');

// spreadsheet key is the long id in the sheets URL
const RESPONSES_SHEET_ID = '1R6TwE3jSovYC1Asw1yUdqko5FFW3DzQPrQBVcOJZiho';
const { JWT } =require( 'google-auth-library');

const serviceAccountAuth = new JWT({
    email: "forms-jayanth@cogent-tree-426607-v2.iam.gserviceaccount.com",
    key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCYFu43rFgzpwGb\nDtoa/duX/YFKNC1LLp88oThPCMIRW4+SUaxqAgpplmxiF/QfOIdSkVHv2iZNe32D\nGJ/MeRRflkp5XjK3MAthEj8Oa6vNOruBUZS8mzjYBu9r1S+QYVGixMspu8ZZ3Up5\nfttsxH4RGlpjjrEdBqq74tMDLmSHrEWdU14S4XRN1fQFgUCZHdUL3/0H0iDo9YJp\n2DW/jUAjUR8GOTyrRO5Va7Uf3cEc3IxM1RGqm74DdFBCniglHhzMCcY3YAlZ6gT2\nZiOPs9xWkzYFYP5u4+SUHpZGXXe57AxiH//4WdwvcomfOUMu/Di3vGdDOl6AhBC2\nNUWroUF1AgMBAAECggEACogVS9lNLEUlc9F190Yv6sOdAdXrcwLR96v++bNqDjNQ\navnpM1gGf47xMg5lkwniOQH4x1/2+gjnRT4zG+t10TQCM+BQKRDpy3mCJfinvL49\n615fqyXL1w23442EzdMnXjA8FJznnHkZ5fWLspRIBIgrd9cS2vyHXcZUWqqKPz4V\nKRsZwZBbTuR3DFrO4tSjwnDsOgGILpDhwWLqHhzrd45L4V37X1FxfuvO3jPdDbc9\na82yh1tT5+QcnVCwKVALjjj9fxHqzQ3n6AjQ3Kqf9Qh+A6e/37qHLcbxSZcx/2r1\nBtvTyUX+i/k3Q2qC86ybUqY8ASLn5EqLzpPsjibjsQKBgQDIv7YRFb9xZ4xtZOgo\nL2VeoP8Fdolu9LrCW/t8guqCi2YXFxvHABg3/n3F0KtEiNAmxPfJWTlfciErR5FX\nOt0f//OJoGUM9OHO2MbuV18066vDUJLsCy/282XFR2H+xYee0eZvKEw/186xIAUo\ngbR6hyMtSUU8PZqXwu9ml81n/QKBgQDB8sz3SFv2IwHNqINTfr3MNC22ojrpNkEb\nQTR13Mhoqzuzl1kjRg9XolLbB3oh20ADixeGvg7Dgt+Ri/OQd1C5WlK+SvQS0cU1\nGCM21CfndA4KH1SjJjiSvibl0aq5sExL/aG6kc6l4w2S3ps2Db0iG0NEX2N7ALCM\nfVCoNslM2QKBgQC8k3I5DF/g7K96V67JiPRFdyD4hchGRXhmeTd9WBFo/f+xsxBx\n2EHn35VQTFuGLqqxsJc/OiRt520HFdyOv4nWtH2Wi+hAyoyP3QzJ+aNCuBuKhtbt\nCvlMlonETvDb/bwPUgeP5Z/y3QuZUYXm7iiWbPl7Yfe6xffBlemDSxg2FQKBgQCz\nExr66321iuccW44+JpTaGgdnTO017Vk57/+fH6aPNiNek8zCy+pYkNEN2R6Eair1\n2pRzXcLF9G22tlDCP9hx+5rQhuZLBhKfDlVdR5A8naRk5j7AkQbFPvstUWTgJI6d\nz2ZnnD8AXd9nj1AiHZdXCXMXizeQF7frT72MQ2GkKQKBgBOkBaW/FbmeDDfltXmd\nctdFF3bc5wVkSj3C7pOoJ8h0RIGcejE8D302Q+GAjLgyP1tJiL8/pc61mYmagoLp\nl4W1MgjxNkpBGy5681HeXROG4J831ymxfaK4VZQtCh4UW0rUFilvpzs/plqKpXba\nQZnSpN4ZJRbBXnB8Oxs/XWp+\n-----END PRIVATE KEY-----\n",
    scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
    ],
});

const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID, serviceAccountAuth);
// Credentials for the service account


const AddRow = async (row) => {

    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0];
        await sheet.addRow(row);
};
module.exports=AddRow