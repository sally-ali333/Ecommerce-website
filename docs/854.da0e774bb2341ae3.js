"use strict";(self.webpackChunkapp1=self.webpackChunkapp1||[]).push([[854],{2854:(D,m,l)=>{l.r(m),l.d(m,{ProfileModule:()=>$});var d=l(6895),u=l(1483),e=l(4650),s=l(4006),g=l(4377);function w(n,r){if(1&n&&(e.TgZ(0,"div",15),e._uU(1),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.Oqu(o.errorMsg)}}function Z(n,r){1&n&&(e.TgZ(0,"div",16),e._UZ(1,"i",17),e._uU(2," Your info is updated\n"),e.qZA())}function v(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1,"Name is required"),e.qZA())}function T(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1," min Length is (3) "),e.qZA())}function I(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1," max Length is (20) "),e.qZA())}function C(n,r){if(1&n&&(e.TgZ(0,"div",15),e.YNc(1,v,2,0,"p",14),e.YNc(2,T,2,0,"p",14),e.YNc(3,I,2,0,"p",14),e.qZA()),2&n){const o=e.oxw();let t,a,i;e.xp6(1),e.Q6J("ngIf",null==(t=o.updateForm.get("name"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(a=o.updateForm.get("name"))?null:a.getError("minlength")),e.xp6(1),e.Q6J("ngIf",null==(i=o.updateForm.get("name"))?null:i.getError("maxlength"))}}function P(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1," Email is required "),e.qZA())}function q(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1,"Email is invalid"),e.qZA())}function x(n,r){if(1&n&&(e.TgZ(0,"div",15),e.YNc(1,P,2,0,"p",14),e.YNc(2,q,2,0,"p",14),e.qZA()),2&n){const o=e.oxw();let t,a;e.xp6(1),e.Q6J("ngIf",null==(t=o.updateForm.get("email"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(a=o.updateForm.get("email"))?null:a.getError("email"))}}function b(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1," phone is required "),e.qZA())}function N(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1," phone lenght is 11 nums & start with 01 as 01088888888 "),e.qZA())}function F(n,r){if(1&n&&(e.TgZ(0,"div",15),e.YNc(1,b,2,0,"p",14),e.YNc(2,N,2,0,"p",14),e.qZA()),2&n){const o=e.oxw();let t,a;e.xp6(1),e.Q6J("ngIf",null==(t=o.updateForm.get("phone"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(a=o.updateForm.get("phone"))?null:a.getError("pattern"))}}function A(n,r){1&n&&e._UZ(0,"i",18)}function U(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1,"Update"),e.qZA())}let J=(()=>{class n{constructor(o,t){this._authService=o,this._router=t,this.loading=!1,this.errorMsg="",this.successMsg=!1,this.notValidForm=!1,this.username="",this.useremail="",this.updateForm=new s.cw({name:new s.NI("",[s.kI.required,s.kI.minLength(3),s.kI.maxLength(20)]),email:new s.NI("",[s.kI.required,s.kI.email]),phone:new s.NI("",[s.kI.required,s.kI.pattern(/^01[0125][0-9]{8}$/)])}),this._authService.userName.subscribe(a=>this.username=a),this._authService.userEmail.subscribe(a=>this.useremail=a),this.updateForm.get("name")?.setValue(this.username),this.updateForm.get("email")?.setValue(this.useremail)}updateData(o){o.valid?(this.loading=!0,this._authService.updateUserData(o.value).subscribe({next:t=>{this.errorMsg="",localStorage.setItem("username",o.value.name),localStorage.setItem("useremail",o.value.email),localStorage.setItem("userphone",o.value.phone),this._authService.userName.next(localStorage.getItem("username")),this._authService.userEmail.next(localStorage.getItem("useremail")),this.loading=!1,this.successMsg=!0},error:t=>{this.successMsg=!1,console.log(t),this.errorMsg=t.error.errors.msg,this.loading=!1}})):this.notValidForm=!0}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(g.e),e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-general-info"]],decls:23,vars:8,consts:[[1,"main-form","w-50","mx-auto","my-5"],[1,"fs-5","fw-bold"],[1,"mb-5"],["class","alert alert-danger",4,"ngIf"],["class","alert alert-success",4,"ngIf"],[3,"formGroup","ngSubmit"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control","mb-4"],["for","email"],["type","email","id","email","formControlName","email",1,"form-control","mb-4"],["for","phone"],["type","phone","id","phone","formControlName","phone",1,"form-control","mb-4"],["type","submit",1,"btn","bg-main","text-white","d-block","ms-auto"],["class","fa fa-spinner fa-spin",4,"ngIf"],[4,"ngIf"],[1,"alert","alert-danger"],[1,"alert","alert-success"],[1,"fa-solid","fa-check","me-2"],[1,"fa","fa-spinner","fa-spin"]],template:function(o,t){if(1&o&&(e.TgZ(0,"div",0)(1,"h5",1),e._uU(2,"General Info :"),e.qZA(),e.TgZ(3,"p",2),e._uU(4,"Edit your personal info"),e.qZA(),e.YNc(5,w,2,1,"div",3),e.YNc(6,Z,3,0,"div",4),e.TgZ(7,"form",5),e.NdJ("ngSubmit",function(){return t.updateData(t.updateForm)}),e.TgZ(8,"label",6),e._uU(9,"Name :"),e.qZA(),e._UZ(10,"input",7),e.YNc(11,C,4,3,"div",3),e.TgZ(12,"label",8),e._uU(13,"Email :"),e.qZA(),e._UZ(14,"input",9),e.YNc(15,x,3,2,"div",3),e.TgZ(16,"label",10),e._uU(17,"Phone :"),e.qZA(),e._UZ(18,"input",11),e.YNc(19,F,3,2,"div",3),e.TgZ(20,"button",12),e.YNc(21,A,1,0,"i",13),e.YNc(22,U,2,0,"span",14),e.qZA()()()),2&o){let a,i,p;e.xp6(5),e.Q6J("ngIf",t.errorMsg),e.xp6(1),e.Q6J("ngIf",t.successMsg),e.xp6(1),e.Q6J("formGroup",t.updateForm),e.xp6(4),e.Q6J("ngIf",(null==(a=t.updateForm.get("name"))?null:a.errors)&&((null==(a=t.updateForm.get("name"))?null:a.touched)||t.notValidForm)),e.xp6(4),e.Q6J("ngIf",(null==(i=t.updateForm.get("email"))?null:i.errors)&&((null==(i=t.updateForm.get("email"))?null:i.touched)||t.notValidForm)),e.xp6(4),e.Q6J("ngIf",(null==(p=t.updateForm.get("phone"))?null:p.errors)&&((null==(p=t.updateForm.get("phone"))?null:p.touched)||t.notValidForm)),e.xp6(2),e.Q6J("ngIf",t.loading),e.xp6(1),e.Q6J("ngIf",!t.loading)}},dependencies:[d.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]}),n})();var c=l(7676),f=l(4144),_=l(4859),h=l(7392);function Y(n,r){if(1&n&&(e.TgZ(0,"div",15),e._uU(1),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.Oqu(o.errorMsg)}}function y(n,r){1&n&&(e.TgZ(0,"div")(1,"p",16),e._UZ(2,"i",17),e._uU(3," Your password is changed "),e.qZA(),e.TgZ(4,"p",15),e._uU(5," Account will be logged out... Please sign in again "),e.qZA()())}function Q(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1," current Password is required "),e.qZA())}function M(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1," invalid..password should have at least 6 char.. uppercase , lowerCase and numbers "),e.qZA())}function S(n,r){if(1&n&&(e.TgZ(0,"div",15),e.YNc(1,Q,2,0,"p",4),e.YNc(2,M,2,0,"p",4),e.qZA()),2&n){const o=e.oxw();let t,a;e.xp6(1),e.Q6J("ngIf",null==(t=o.changePasswordForm.get("currentPassword"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(a=o.changePasswordForm.get("currentPassword"))?null:a.getError("pattern"))}}function G(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1," password is required "),e.qZA())}function k(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1," invalid..password should have at least 6 char.. uppercase , lowerCase and numbers "),e.qZA())}function E(n,r){if(1&n&&(e.TgZ(0,"div",15),e.YNc(1,G,2,0,"p",4),e.YNc(2,k,2,0,"p",4),e.qZA()),2&n){const o=e.oxw();let t,a;e.xp6(1),e.Q6J("ngIf",null==(t=o.changePasswordForm.get("password"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(a=o.changePasswordForm.get("password"))?null:a.getError("pattern"))}}function V(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1," rePassword is required "),e.qZA())}function O(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1," rePassword is invalid "),e.qZA())}function R(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1," repassword is not match password "),e.qZA())}function z(n,r){if(1&n&&(e.TgZ(0,"div",15),e.YNc(1,V,2,0,"p",4),e.YNc(2,O,2,0,"p",4),e.YNc(3,R,2,0,"p",4),e.qZA()),2&n){const o=e.oxw();let t,a,i;e.xp6(1),e.Q6J("ngIf",null==(t=o.changePasswordForm.get("rePassword"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(a=o.changePasswordForm.get("rePassword"))?null:a.getError("pattern")),e.xp6(1),e.Q6J("ngIf",null==(i=o.changePasswordForm.get("rePassword"))?null:i.getError("repasswordNotMatch"))}}function L(n,r){1&n&&e._UZ(0,"i",18)}function j(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1,"Update"),e.qZA())}let B=(()=>{class n{constructor(o,t){this._authService=o,this._router=t,this.loading=!1,this.errorMsg="",this.successMsg=!1,this.notValidForm=!1,this.hide=!0,this.changePasswordForm=new s.cw({currentPassword:new s.NI("",[s.kI.required,s.kI.pattern(/^[A-Z][a-z0-9]{6,}$/)]),password:new s.NI("",[s.kI.required,s.kI.pattern(/^[A-Z][a-z0-9]{6,}$/)]),rePassword:new s.NI("",[s.kI.required,s.kI.pattern(/^[A-Z][a-z0-9]{6,}$/)])},{validators:this.validateRePassword})}validateRePassword(o){let t=o.get("password"),a=o.get("rePassword");return t.value==a.value?null:(a.setErrors({repasswordNotMatch:"repassword is not match password"}),{repasswordNotMatch:"repassword is not match password"})}changePassword(o){o.valid?(this.loading=!0,this._authService.changePassword(o.value).subscribe({next:t=>{this.errorMsg="",console.log(t),localStorage.setItem("userToken",t.token),this.loading=!1,this.successMsg=!0,setTimeout(()=>{this._authService.signOut()},3e3)},error:t=>{this.successMsg=!1,console.log(t),this.loading=!1,this.errorMsg=t.error.errors.msg}})):this.notValidForm=!0}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(g.e),e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-change-password"]],decls:35,vars:20,consts:[[1,"main-form","w-50","mx-auto"],[1,"fs-5","fw-bold"],[1,"mb-5"],["class","alert alert-danger",4,"ngIf"],[4,"ngIf"],[3,"formGroup","ngSubmit"],["for","password"],[1,"position-relative"],["matInput","","id","password","formControlName","currentPassword",1,"form-control","mb-4",3,"type"],["mat-icon-button","","matSuffix","",1,"position-absolute","top-0","end-0",3,"click"],["matInput","","id","password","formControlName","password",1,"form-control","mb-4",3,"type"],["for","rePassword"],["matInput","","id","rePassword","formControlName","rePassword",1,"form-control","mb-4",3,"type"],["type","submit",1,"btn","bg-main","text-white","d-block","ms-auto"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"alert","alert-danger"],[1,"alert","alert-success"],[1,"fa-solid","fa-check","me-2"],[1,"fa","fa-spinner","fa-spin"]],template:function(o,t){if(1&o&&(e.TgZ(0,"div",0)(1,"h5",1),e._uU(2,"Security :"),e.qZA(),e.TgZ(3,"p",2),e._uU(4,"change your password"),e.qZA(),e.YNc(5,Y,2,1,"div",3),e.YNc(6,y,6,0,"div",4),e.TgZ(7,"form",5),e.NdJ("ngSubmit",function(){return t.changePassword(t.changePasswordForm)}),e.TgZ(8,"label",6),e._uU(9,"current Password:"),e.qZA(),e.TgZ(10,"div",7),e._UZ(11,"input",8),e.TgZ(12,"button",9),e.NdJ("click",function(){return t.hide=!t.hide}),e.TgZ(13,"mat-icon"),e._uU(14),e.qZA()()(),e.YNc(15,S,3,2,"div",3),e.TgZ(16,"label",6),e._uU(17,"Password:"),e.qZA(),e.TgZ(18,"div",7),e._UZ(19,"input",10),e.TgZ(20,"button",9),e.NdJ("click",function(){return t.hide=!t.hide}),e.TgZ(21,"mat-icon"),e._uU(22),e.qZA()()(),e.YNc(23,E,3,2,"div",3),e.TgZ(24,"label",11),e._uU(25," RePassword:"),e.qZA(),e.TgZ(26,"div",7),e._UZ(27,"input",12),e.TgZ(28,"button",9),e.NdJ("click",function(){return t.hide=!t.hide}),e.TgZ(29,"mat-icon"),e._uU(30),e.qZA()()(),e.YNc(31,z,4,3,"div",3),e.TgZ(32,"button",13),e.YNc(33,L,1,0,"i",14),e.YNc(34,j,2,0,"span",4),e.qZA()()()),2&o){let a,i,p;e.xp6(5),e.Q6J("ngIf",t.errorMsg),e.xp6(1),e.Q6J("ngIf",t.successMsg),e.xp6(1),e.Q6J("formGroup",t.changePasswordForm),e.xp6(4),e.Q6J("type",t.hide?"password":"text"),e.xp6(1),e.uIk("aria-label","Hide password")("aria-pressed",t.hide),e.xp6(2),e.Oqu(t.hide?"visibility_off":"visibility"),e.xp6(1),e.Q6J("ngIf",(null==(a=t.changePasswordForm.get("currentPassword"))?null:a.errors)&&((null==(a=t.changePasswordForm.get("currentPassword"))?null:a.touched)||t.notValidForm)),e.xp6(4),e.Q6J("type",t.hide?"password":"text"),e.xp6(1),e.uIk("aria-label","Hide password")("aria-pressed",t.hide),e.xp6(2),e.Oqu(t.hide?"visibility_off":"visibility"),e.xp6(1),e.Q6J("ngIf",(null==(i=t.changePasswordForm.get("password"))?null:i.errors)&&((null==(i=t.changePasswordForm.get("password"))?null:i.touched)||t.notValidForm)),e.xp6(4),e.Q6J("type",t.hide?"password":"text"),e.xp6(1),e.uIk("aria-label","Hide password")("aria-pressed",t.hide),e.xp6(2),e.Oqu(t.hide?"visibility_off":"visibility"),e.xp6(1),e.Q6J("ngIf",(null==(p=t.changePasswordForm.get("rePassword"))?null:p.errors)&&((null==(p=t.changePasswordForm.get("rePassword"))?null:p.touched)||t.notValidForm)),e.xp6(2),e.Q6J("ngIf",t.loading),e.xp6(1),e.Q6J("ngIf",!t.loading)}},dependencies:[d.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,c.R9,f.Nt,_.RK,h.Hw]}),n})();const H=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-profile"]],decls:5,vars:0,consts:[[1,"container","my-5","bg-main-light","p-5"],[1,"sec-heading"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"My Information"),e.qZA(),e._UZ(3,"app-general-info")(4,"app-change-password"),e.qZA())},dependencies:[J,B]}),n})()}];let X=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(H),u.Bz]}),n})(),$=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,X,s.u5,s.UX,c.lN,f.c,_.ot,h.Ps]}),n})()}}]);