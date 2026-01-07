// type assersion kaha pr fail hota he?

// force fully assertion krna prta he

let response: any = "42";
let strLength1: number = (response as string).length;

// ye bhi chal jata he
let strLength2: number = (<string>response).length;

// lets discuss any and unknown

let value: any;
value = true;
value = 44;
value = "hello world";
value = [2, 2, 3, 3];
value.toUpperCase(); // koi error ni dega ye
// kyuki any me hum kuch bhi kr skte he

let newValue: unknown;
newValue = true;
newValue = 44;
newValue = "hello world";
newValue = [2, 2, 3, 2];
// newValue.toUpperCase() // ye error dega kyuki unknown me hum directly kuch ni kr skte
// hume pehle type check krna prta he
if (typeof newValue === "string") {
  newValue.toUpperCase();
}
// now ye error ni dega

// now lets try with try and catch

try {
} catch (error) {
  // console.log(error.message); // ye error dega kyuki error ka type unknown hota he by default
  // to isko bhi hume type assertion krna prta he
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("error", error);
}

// also

let data: unknown = "hello world";
// const datahe:string = data // ye error dega
const datahe: string = data as string; // ye sahi he

// lets discuss nevertype

type Role = "admin" | "user" | "superadmin";

function redirectionOnRoleBase(role: Role): void {
  if (role === "admin") {
    console.log("redirect to admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("redirect to user dashboard");
    return;
  }
  // role > jo ye role define kra ha yaha pr is ki datatype never  ya superamin bn chuki he hover on it and check krlo
  role;
}
