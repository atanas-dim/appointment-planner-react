(this["webpackJsonpappointment-planner-react"]=this["webpackJsonpappointment-planner-react"]||[]).push([[0],{32:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(20),i=n.n(c),s=n(18),r=n(4),l=n(12),o=n(2),j=n(13),u=n(0),b=function(t){var e=t.contacts.map((function(t){return Object(u.jsx)("option",{value:t.name,children:t.name},t.name)}));return Object(u.jsxs)("form",{children:[Object(u.jsx)("label",{htmlFor:"contactList",children:"Choose contact:"}),Object(u.jsxs)("select",{id:"contactList",onChange:t.onChange,required:!0,children:[Object(u.jsx)("option",{value:t.defaultListValue,selected:"selected",children:t.defaultListValue},"default"),e]})]})},d=function(t){var e=t.contacts,n=t.title,a=t.setTitle,c=(t.contact,t.setContact),i=t.date,s=t.setDate,l=t.time,o=t.setTime,j=t.handleSubmit,d=t.alert,h=t.defaultListValue;return Object(u.jsxs)("form",{onSubmit:j,children:[Object(u.jsx)("label",{htmlFor:"titleInput",children:"Title"}),Object(u.jsx)("input",{value:n,onChange:function(t){return a(t.target.value)},type:"text",id:"titleInput",required:!0}),Object(u.jsx)(b,{contacts:e,onChange:function(t){return c(t.target.value)},defaultListValue:h}),Object(u.jsx)("label",{htmlFor:"dateInput",children:"Date"}),Object(u.jsx)("input",{value:i,onChange:function(t){return s(t.target.value)},type:"text",id:"dateInput",min:function(){var t=(new Date).toLocaleDateString("en-US").split("/"),e=Object(r.a)(t,3),n=e[0],a=e[1],c=e[2];return"".concat(c,"-").concat(n.padStart(2,"0"),"-").concat(a.padStart(2,"0"))}(),required:!0}),Object(u.jsx)("label",{htmlFor:"timeInput",children:"Time"}),Object(u.jsx)("input",{value:l,onChange:function(t){return o(t.target.value)},type:"text",id:"timeInput",required:!0}),Object(u.jsx)("button",{type:"submit",disabled:!!d,children:"Add Appointment"}),Object(u.jsx)("h2",{className:"alert",children:d})]})},h=function(t){var e=t.info,n=Object.values(e).map((function(t,e){var n;return n=0===e?"tile-title":"tile",Object(u.jsx)("p",{className:n,children:t},e)}));return Object(u.jsx)("div",{className:"tile-container",children:n})},O=function(t){var e=t.object.map((function(t,e){return Object(u.jsx)(h,{info:t},e)}));return Object(u.jsx)("div",{children:e})},m=function(t){var e=Object(a.useState)(""),n=Object(r.a)(e,2),c=n[0],i=n[1],s=Object(a.useState)(""),l=Object(r.a)(s,2),o=l[0],b=l[1],h=Object(a.useState)(""),m=Object(r.a)(h,2),p=m[0],x=m[1],f=Object(a.useState)(""),v=Object(r.a)(f,2),g=v[0],C=v[1],S=Object(a.useState)(""),y=Object(r.a)(S,2),I=y[0],A=y[1],N="No contact selected";return Object(a.useEffect)((function(){var e,n=Object(j.a)(t.appointments);try{for(n.s();!(e=n.n()).done;){var a=e.value;a.date===p&&a.time===g?(A("Appointment is already booked."),console.log("Appointment is already booked.")):A("")}}catch(c){n.e(c)}finally{n.f()}}),[t.appointments,p,g]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"Add Appointment"}),Object(u.jsx)(d,{contacts:t.contacts,title:c,setTitle:i,contact:o,setContact:b,date:p,setDate:x,time:g,setTime:C,handleSubmit:function(e){e.preventDefault(),t.addAppointment(c,o,p,g),i(""),b(""),x(""),C(""),document.getElementById("contactList").value=N},alert:I,defaultListValue:N})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"Appointments"}),Object(u.jsx)(O,{object:t.appointments})]})]})},p=function(t){var e=t.name,n=t.setName,a=t.phone,c=t.setPhone,i=t.email,s=t.setEmail,r=t.handleSubmit,l=t.alert;return Object(u.jsxs)("form",{onSubmit:r,children:[Object(u.jsx)("label",{htmlFor:"nameInput",children:"Name"}),Object(u.jsx)("input",{value:e,onChange:function(t){return n(t.target.value)},type:"text",id:"nameInput",required:!0}),Object(u.jsx)("label",{htmlFor:"phoneInput",children:"Phone"}),Object(u.jsx)("input",{value:a,onChange:function(t){return c(t.target.value)},type:"tel",pattern:"^\\s*\\(?(020[7,8]{1}\\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\\s*$",id:"phoneInput",required:!0}),Object(u.jsx)("label",{htmlFor:"emailInput",children:"Email"}),Object(u.jsx)("input",{value:i,onChange:function(t){return s(t.target.value)},type:"email",id:"emailInput",required:!0}),Object(u.jsx)("button",{type:"submit",disabled:!!l,children:"Add Contact"}),Object(u.jsx)("h2",{className:"alert",children:l})]})},x=function(t){var e=Object(a.useState)(""),n=Object(r.a)(e,2),c=n[0],i=n[1],s=Object(a.useState)(""),l=Object(r.a)(s,2),o=l[0],b=l[1],d=Object(a.useState)(""),h=Object(r.a)(d,2),m=h[0],x=h[1],f=Object(a.useState)(!1),v=Object(r.a)(f,2),g=v[0],C=v[1],S=Object(a.useState)(""),y=Object(r.a)(S,2),I=y[0],A=y[1];return Object(a.useEffect)((function(){var e,n=Object(j.a)(t.contacts);try{for(n.s();!(e=n.n()).done;){if(e.value.name===c)return void(g||(C(!0),A("Contact is already in the list."),console.log("Contact is already in the list.")));C(!1),A("")}}catch(a){n.e(a)}finally{n.f()}}),[t.contacts,c,g]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"Add Contact"}),Object(u.jsx)(p,{name:c,setName:i,phone:o,setPhone:b,email:m,setEmail:x,handleSubmit:function(e){e.preventDefault(),g||(t.addContact(c,o,m),i(""),b(""),x(""))},alert:I})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsx)(O,{object:t.contacts})]})]})};var f=function(){var t="/contacts",e="/appointments",n=Object(a.useState)([{name:"Atanas Dimitrov",phone:"07712345678",email:"atanas@defaultemail.com"},{name:"John Doe",phone:"07787654321",email:"john@defaultemail.com"}]),c=Object(r.a)(n,2),i=c[0],j=c[1],b=Object(a.useState)([]),d=Object(r.a)(b,2),h=d[0],O=d[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)(l.b,{to:t,activeClassName:"active",children:"Contacts"}),Object(u.jsx)(l.b,{to:e,activeClassName:"active",children:"Appointments"})]}),Object(u.jsx)("main",{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/",children:Object(u.jsx)(o.a,{to:t})}),Object(u.jsx)(o.b,{path:t,children:Object(u.jsx)(x,{contacts:i,addContact:function(t,e,n){j((function(a){return[].concat(Object(s.a)(a),[{name:t,phone:e,email:n}])}))}})}),Object(u.jsx)(o.b,{path:e,children:Object(u.jsx)(m,{appointments:h,addAppointment:function(t,e,n,a){O((function(c){return[].concat(Object(s.a)(c),[{title:t,contact:e,date:n,time:a}])}))},contacts:i})})]})})]})};i.a.render(Object(u.jsx)(l.a,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.833f0ab2.chunk.js.map