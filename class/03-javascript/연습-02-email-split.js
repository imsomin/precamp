const email = "codecamp@gmail.com"
//undefined

email.includes("@")
//true

email.split("@")
//(2) ['codecamp', 'gmail.com']

email.split("@")[0]
//'codecamp'

email.split("@")[1]
//'gmail.com'

let userMail = email.split("@")[0]
//undefined

userMail
//'codecamp'

let company = email.split("@")[1]
//undefined

company
//'gmail.com'

let maskingMail = []  //--빈 배열 생성
//undefined

maskingMail.push(userMail[0])
//1

maskingMail
//['c']

maskingMail.push(userMail[1])
//2

maskingMail
//(2) ['c', 'o']

maskingMail.push(userMail[2])
//3

maskingMail
//(3) ['c', 'o', 'd']

maskingMail.push(userMail[3])
//4

maskingMail
//(4) ['c', 'o', 'd', 'e']

maskingMail.push("*")
//5

maskingMail
//(5) ['c', 'o', 'd', 'e', '*']

maskingMail.push("*")
//6

maskingMail.push("*")
//7

maskingMail.push("*")
//8

maskingMail
//(8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']

maskingMail.join("-")
//'c-o-d-e-*-*-*-*'

maskingMail.join("/")
//'c/o/d/e/*/*/*/*'

maskingMail.join("")
//'code****'

maskingMail.join("") + "@" + company
//'code****@gmail.com'

let result = maskingMail.join("") + "@" + company
//undefined

result
//'code****@gmail.com'