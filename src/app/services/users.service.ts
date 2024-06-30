import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userURL='http://localhost:3000/api/users'
 
 
  constructor(private httpClient:HttpClient) { }
  addUser(userObj:any,img:File){
    console.log("here service",img);
    
    //formaData 
    let fData= new FormData();
    fData.append("firstName",userObj.firstName);
    fData.append("lastName",userObj.lastName);
    fData.append("email",userObj.email);
    fData.append("pwd",userObj.pwd);
    fData.append("tel",userObj.tel);
    fData.append("role",userObj.role);
    fData.append("img",img);
    return this.httpClient.post<{message:any}>(this.userURL+'/signup',fData);
  }
 login(userObj:any){
  return this.httpClient.post<{message:string,user:any}>(this.userURL+'/login',userObj);
 }
 editProfile(userObj:any){
  return this.httpClient.put<{message:any}>(this.userURL,userObj)
}

}
