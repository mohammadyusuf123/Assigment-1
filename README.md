# TypeScript Blog

## এই ব্লগ পোস্টটি টাইপস্ক্রিপ্টের গুরুত্বপূর্ণ কিছু টপিক নিয়ে আলোচনা করা হয়েছে।

## 1. TypeScript-এ `interface` এবং `type` এর মধ্যে পার্থক্য

TypeScript-এ `interface` এবং `type` দুটিই অবজেক্টের গঠন বা শেপ বর্ণনা করতে ব্যবহৃত হয়। তবে এদের মধ্যে কিছু মৌলিক পার্থক্য রয়েছে।

### 🔹 **1. এক্সটেনশন (Extension)**

- **Interface** এক বা একাধিক interface কে `extends` keyword দিয়ে সহজে এক্সটেন্ড করতে পারে।
- **Type** ও এক্সটেন্ড করা যায়, তবে intersection (`&`) ব্যবহার করে।

**উদাহরণ:**

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}
```

```ts
type Person = {
  name: string;
};

type Employee = Person & {
  salary: number;
};
```

### 🔹 **2. Declaration Merging**

- **Interface** multiple times declare করলে merge হয়ে যায়।
- **Type** কখনো merge হয় না; একবার declare করলে পুনরায় declare করা যায় না।

**উদাহরণ:**

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// Resulting User: { name: string; age: number }
```

Type-এর ক্ষেত্রে এটি error দেবে।

### 🔹 **3. ব্যবহার (Use Cases)**

- **Interface** সাধারণত object structure বা class এর contract define করতে বেশি ব্যবহৃত হয়।
- **Type** ব্যবহৃত হয় union, intersection, primitive alias ইত্যাদি complex টাইপ তৈরিতে।

সুতরাং, Interface বেশি structured এবং extend-friendly, আর Type বেশি flexible এবং powerful।

---

## 2. TypeScript-এ `unknown`, `any`, এবং `never` এর পার্থক্য

TypeScript-এ ভিন্ন ভিন্ন পরিস্থিতিতে ব্যবহারের জন্য কিছু বিশেষ টাইপ রয়েছে। এর মধ্যে `any`, `unknown`, এবং `never` সবচেয়ে গুরুত্বপূর্ণ। এগুলোর ব্যবহারের ক্ষেত্রে পার্থক্য বোঝা খুব জরুরি।

### 🔹 **1. any – সবচেয়ে কম সেফ টাইপ**

`any` মানে হলো: "এটা যেকোনো কিছু হতে পারে।" টাইপস্ক্রিপ্ট এই ভ্যালুর উপর কোনো টাইপ চেক করবে না।

```ts
let data: any = 10;
data = "Hello";
data.toUpperCase(); // কোনো সমস্যা হবে না
```

👉 **Risky**, কারণ ভুল থাকলেও TS error দেখাবে না।

---

### 🔹 **2. unknown – সেফ any**

`unknown` হলো `any` এর নিরাপদ সংস্করণ। আপনি `unknown` টাইপ ব্যবহার করলে আগে টাইপ চেক না করে কোনো অপারেশন করতে পারবেন না।

```ts
let value: unknown = "Hello";

value.toUpperCase(); // ❌ Error

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✔️ Safe
}
```

👉 এটি ব্যবহার করলে data নিরাপদভাবে হ্যান্ডেল করা যায়।

---

### 🔹 **3. never – অসম্ভব বা অপ্রাপ্য ভ্যালুর টাইপ**

`never` সেই সব ফাংশনের return টাইপ যা কখনোই কোনো ভ্যালু রিটার্ন করে না। যেমন error throw করা বা infinite loop।

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

👉 এটি সেই সব ক্ষেত্রে ব্যবহৃত হয় যেখানে কোনো ভ্যালু theoretically impossible।

---

## উপসংহার

TypeScript কোডকে আরো নিরাপদ, predictable এবং maintainable করতে `interface`, `type`, `unknown`, `any`, ও `never` টাইপগুলো খুবই গুরুত্বপূর্ণ ভূমিকা রাখে। এগুলোর সঠিক ব্যবহার বড় অ্যাপ্লিকেশন ডেভেলপমেন্টে বাগ কমায়, টাইপ সেফটি বাড়ায় এবং কোডকে আরও রোবাস্ট করে।
