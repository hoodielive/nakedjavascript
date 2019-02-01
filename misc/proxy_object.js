let handler = { 
  set (target, key, value) {
    console.info(`property "${key}" set on object "${target}" with a value of "${value}"`) 
  }
}

let target = Object.create(null);
let proxy = new Proxy(target, handler)
