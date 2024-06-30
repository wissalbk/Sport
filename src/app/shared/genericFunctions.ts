//EXPORT POUR   INMPORTER N IMPORTE QUELLE PROJET
export function generatedId(T:any){
    var max;
    if (T.length == 0) {
        max = 0;
    } else {
        max = T[0].id;
        for (let i = 1; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id;
  
            }
        }
    }
  
    return max;
  
  }
export function deleteById(id:number,key:string,tab:any) {

  let pos =tab.findIndex((m:any)=> m.id == id);
   tab.splice(pos,1);
  localStorage.setItem(key,JSON.stringify(tab));
}