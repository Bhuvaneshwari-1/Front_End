//Q5

function identity<T>(value: T): T {
    return value;
}

// Calling the generic function with different types
console.log(identity<string>("Hello, TypeScript!"));
console.log(identity<number>(42));
console.log(identity<boolean>(true));
