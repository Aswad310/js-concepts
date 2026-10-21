// =====================================================================
// PROMISES — QUICK NOTES
// =====================================================================
// A Promise is a value that arrives later. It has 3 states:
//   pending   -> still working
//   fulfilled -> finished OK      (resolve(value))
//   rejected  -> failed           (reject(error))
//
// Handling the result:
//   .then(fn)     runs when fulfilled
//   .catch(fn)    runs when rejected
//   .finally(fn)  runs always (success or fail)
// =====================================================================


// ---------------------------------------------------------------------
// 1) BASIC PROMISE 
// ---------------------------------------------------------------------
// Pattern: new Promise((resolve, reject) => { ... })
//   - call resolve(x) on success, reject(err) on failure
//   - .then/.catch/.finally can be chained one after another
//
// Note: `value = false` has no const/let, so it becomes a global variable.
//       Always declare it: `const value = false`.

const myPromise = new Promise((resolve, reject) => {
  value = false

  if (value === true) {
    console.log("This is true value")
    resolve("Promise resolved")
  }
  else {
    console.log("This is false value")
    reject("Promise Rejected")
  }
})

myPromise
  .then(msg => console.log(msg))
  .catch(error => console.log(error))
  .finally(() => console.log("This is finally callbackk"))


// ---------------------------------------------------------------------
// 2) TWO FAKE API CALLS
// ---------------------------------------------------------------------
// They are functions (not plain promises) so the work starts only when called.
//
// p1 -> succeeds after 1 second with ["Aswad", "Abad"]
const p1 = () => new Promise(resolve => setTimeout(() => resolve(["Aswad", "Abad"]), 1000))

// p2 (slow success version) -> succeeds after 3 seconds
// const p2 = () => new Promise(resolve => setTimeout(() => resolve(["Mohsin", "Hussnain"]), 3000))

// p2 (active version) -> fails instantly.
// Throwing inside the Promise callback automatically rejects the promise.
const p2 = () => new Promise(resolve => {
  throw new Error("Some error occurs")
})


// ---------------------------------------------------------------------
// 3) RUNNING PROMISES TOGETHER
// ---------------------------------------------------------------------
// async/await = cleaner way to use promises.
//   - `await` pauses until the promise settles, then gives the value
//   - if the promise rejects, `await` throws -> caught by try/catch
//   - `finally` always runs
//
// Pick ONE combinator below. Results for p1 (ok, 1s) + p2 (fails now):
//
// | Method               | Waits for            | Result with p1 + p2                                   |
// |----------------------|----------------------|-------------------------------------------------------|
// | Promise.all          | ALL to succeed       | REJECTS (p2 failed) -> goes to catch                  |
// | Promise.allSettled   | ALL to finish        | Never rejects. Array of {status, value | reason}       |
// | Promise.any          | FIRST success        | p1's value (ignores p2's failure)                     |
// | Promise.race         | FIRST to finish      | p2 failed first -> REJECTS -> goes to catch           |
//
// When to use:
//   all        -> need every result, any failure = stop      (dashboard needing all data)
//   allSettled -> need to know the outcome of each, even failures
//   any        -> need just one success                      (try several mirrors/servers)
//   race       -> need the fastest answer, success or fail   (timeouts)
//
// GOTCHA: only all/allSettled return one result PER promise as an array.
//   any/race return a SINGLE value (the winner's value).
//   So `const [users, admin] = await Promise.any(...)` is wrong:
//   it destructures p1's own array -> users = "Aswad", admin = "Abad".
//   It only looks right here by coincidence.
async function fetchDashboard() {
  try {
    const [users, admin] = await Promise.all([p1(), p2()])
    // const [users, admin] = await Promise.allSettled([p1(), p2()])
    // const [users, admin] = await Promise.any([p1(), p2()])
    // const [users, admin] = await Promise.race([p1(), p2()])

    console.log("Users===>>", users)
    console.log("Admin===>>", admin)
  }
  catch (e) {
    // Reached if the awaited promise rejects (here: race -> p2's error)
    console.error(e)
  }
  finally {
    // Always runs, even after an error
    console.log("Process Completed>>")
  }
}

fetchDashboard()
