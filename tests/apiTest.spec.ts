import {test, expect} from '@playwright/test';

var objectId = "";

test('get user details using GET API', async ({request}) => {
    const response = await request.get("https://api.restful-api.dev/objects/7");
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.id).toBe("7");
    expect(responseBody.name).toBe("Apple MacBook Pro 16");
});

test('create user using POST API', async ({request}) => {
    const payload = {
    "name": "Apple MacBook Pro 16",
    "data": {
        "year": 2019,
        "price": 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
        }
    }

    const response = await request.post("https://api.restful-api.dev/objects", {
        data: payload,
        headers: {'Content-Type': 'application/json'}
    });

    var responseBody = await response.json();
    console.log(responseBody);

    expect(response.status()).toBe(200);
    expect(responseBody.name).toBe(payload.name);
    expect(responseBody.data.year).toBe(payload.data.year);
    objectId = responseBody.id;
    console.log("Created object ID: " + objectId);
});

test('update user details using PUT API', async ({request}) => {
    const payload = {
    "name": "Nothing Phone 2",
    "data": {
        "year": 2019,
        "price": 2049.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
        "color": "silver"
        }
    }
    const response = await request.put("https://api.restful-api.dev/objects/" + objectId, {
        data: payload,
        headers: {'Content-Type': 'application/json'}
    });

    var responseBody = await response.json();
    console.log(responseBody);

    expect(response.status()).toBe(200);
    expect(responseBody.name).toBe(payload.name);
    expect(responseBody.data.year).toBe(payload.data.year);
});

test('delete user using DELETE API', async ({request}) => {
    const response = await request.delete("https://api.restful-api.dev/objects/" + objectId);
    expect(response.status()).toBe(200);
});