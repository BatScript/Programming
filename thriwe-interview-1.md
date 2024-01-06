```
;(function () {
    console.log(1)
    setTimeout(function () {
      console.log(2)
    }, 1000)
    setTimeout(function () {
      console.log(3)
    }, 0)
    console.log(4)
  })()

```
```
    console.log(1)
    console.log(2)
    console.log(3)
```
```
    async function f() {
        try {
          let response = await fetch('/no-user-here');
          let user = await response.json();
        } catch(err) {
          // catches errors both in fetch and response.json
          alert(err);
        }
      }
```
```

    console.log(1 + 2 + '2' + '2' + 2) //3222
    console.log('A' - 'B' + '2') //Nan2
```

## React

 1. Batching
 2. Nextjs Render Methods
 3. React Working