
import {Friend, Colleague } from './myTypes'

import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))


function allOlder(fs: Friend[]) : String[] {
    const older = new Array();
    fs.forEach( f => {
        f.age += 1;
        older.push( `${f.name} is now ${f.age}`)
    })
    return older;
}

console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));


function addColleague(cs: Colleague[], colName: string, dep: string, colEmail: string) {
    var currentHighestExt = highestExtension(colleagues.current)
    cs.push(
        {
            name: colName,
            department: dep,
            contact: {
                email: colEmail,
                extension: currentHighestExt.contact.extension + 1
            }
        }
        )
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));