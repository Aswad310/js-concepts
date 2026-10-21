import { Observable } from 'rxjs';

const myObserver = new Observable((observer) => {
  observer.next("1")
  observer.next("2")
  observer.next("3")
});


const subscription = myObserver.subscribe((result) => {
  console.log('observable: ', result)
})

subscription.unsubscribe();