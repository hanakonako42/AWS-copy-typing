//=================================================
let staff: { firstName: string; lastName: string };
staff = { firstName: "AWS", lastName: "太郎" };

let boss: { firstName: string; lastName: string };
boss = { firstName: "Amazon", lastName: "次郎" };

console.log(`My name is ${staff.firstName} ${staff.lastName}.`);
console.log(`${staff.firstName} ${staff.lastName}の上司は${boss.firstName} ${boss.lastName}です。`);
//=================================================
type Staff = {
    firstName: string;
    lastName: string;
    jobTitle?: string;
};

const staffA: Staff = { firstName: "AWS", lastName: "太郎", jobTitle: "インフラエンジニア" };
const bossA: Staff = { firstName: "Amazon", lastName: "次郎" };

console.log(`${staffA.firstName} ${staffA.lastName}の上司は${bossA.firstName} ${bossA.lastName}です。`);
console.log(`${staffA.firstName} ${staffA.lastName}の職種は${staffA.jobTitle}です。`);
//=================================================