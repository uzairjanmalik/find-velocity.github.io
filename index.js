// v= s/t;
// s= v*t;
// t= s/v;
const user = prompt(`enter what you want to find, v,s, or t.`);

if (user === "v") {
    const s = prompt(`enter the value of distance.`);
    const t = prompt(`enter the value of time.`);
    alert(`the velocity is about ,${s / t}`);
}
else if (user == "s") {
    const v = prompt(`enter the value of velocity.`);
    const t = prompt(`enter the value of time.`);
    alert(`the value of distaince is about,${v * t}`);
}
else if (user == "t") {
    const s = prompt(`enter the value of distance.`);
    const v = prompt(`enter the value of velocity.`);
    alert(`the value of time is about,${s / v}`);
}
else {
    alert(`invalid value input`);
}
