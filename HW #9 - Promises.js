/////WAITING ON MULTIPLE PROMISES

async function go() {
    const p1 = fetch('url/users/dejon').then(r => r.json());  //.then gives user data
    const p2 = fetch('url/users/rob').then(r => r.json());
    //wait for both of them to come back
    const res = await Promise.all([p1, p2]);  //will not resolve itself until both promises come back
    console.log(res);
    //OR USING ARRAYS .MAP
    const dataPromises = res.map(r => r.json());
    const wesAndScott = await Promise.all(dataPromises);
    //deconstruct
    const [wes, scott] = await Promise.all(dataPromises);
    console.log(wes, scott);

}

go();



async function getData(names) {
    const promises = names.map(name => fetch(`url/users/${name}`).then(r => r.json()));
    const people = await Promise.all(promises);

// if only cared for quickest promise to come back, can do promise.race
    console.log(people);
}

getData(['dejon', 'rob', 'thami']);