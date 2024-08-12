import { Subject, combineLatest } from "rxjs";

const mobileCareCreated$ = new Subject<boolean>();
const packageCreated$ = new Subject<boolean>();
mobileCareCreated$.next(true);

function onListen() {
//   console.log("xxx");

  combineLatest([mobileCareCreated$, packageCreated$]).subscribe((res) => {
    console.log('res', res);
    
    const [careCreated, packageCreated] = res;
    console.log("careCreated", careCreated);
    console.log("packageCreated", packageCreated);
  });
}
// mobileCareCreated$.next(true);
onListen();
mobileCareCreated$.next(false);
packageCreated$.next(true);
// mobileCareCreated$.unsubscribe();
// 