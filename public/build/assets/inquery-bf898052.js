import{a as p}from"./adminlayout-26a2b5e8.js";import{_ as u,c as t,d as e,a as l,w as y,F as g,h,r,o as s,e as f,t as x}from"./app-f1278bda.js";const b={layout:p,methods:{printTable(){const a=document.getElementById("table-to-print").innerHTML,o=document.body.innerHTML;document.body.innerHTML=a,window.print(),document.body.innerHTML=o}},data(){return{options:["no","lot","serbey","tittle-area","awarded-area","previous land owner","field","locaiton","municipality","title","cloa no","page","encobered"]}}},v={class:"bg-white"},_={class:"px-6 pt-4"},w=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 mr-2"},[e("path",{"fill-rule":"evenodd",d:"M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z","clip-rule":"evenodd"})],-1),k={class:"rounded"},M=e("section",{"aria-labelledby":"payment-details-heading"},[e("form",{action:"#",method:"POST"},[e("div",{class:"shadow sm:overflow-hidden sm:rounded-md"},[e("div",{class:"bg-white px-6 pt-6"},[e("div",null,[e("h2",{id:"payment-details-heading",class:"text-lg font-medium leading-6 text-gray-900"},"Available Searchable fields "),e("p",{class:"mt-1 text-sm text-gray-500"},"Base in yout input it will filter the table")]),e("div",{class:"mt-6 grid grid-cols-4 gap-6"},[e("div",{class:"col-span-4 sm:col-span-2"},[e("label",{for:"first-name",class:"block text-sm font-medium text-gray-700"},"Lot Prervious Owner"),e("input",{type:"text",name:"first-name",id:"first-name",autocomplete:"cc-given-name",class:"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"})]),e("div",{class:"col-span-4 sm:col-span-2"},[e("label",{for:"last-name",class:"block text-sm font-medium text-gray-700"},"Lot Location"),e("input",{type:"text",name:"last-name",id:"last-name",autocomplete:"cc-family-name",class:"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"})]),e("div",{class:"col-span-4 sm:col-span-2"},[e("label",{for:"email-address",class:"block text-sm font-medium text-gray-700"},"Area"),e("input",{type:"text",name:"email-address",id:"email-address",autocomplete:"email",class:"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"})]),e("div",{class:"col-span-4 sm:col-span-1"},[e("label",{for:"expiration-date",class:"block text-sm font-medium text-gray-700"},"Municipality"),e("input",{type:"text",name:"expiration-date",id:"expiration-date",autocomplete:"cc-exp",class:"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm",placeholder:"MM / YY"})]),e("div",{class:"col-span-4 sm:col-span-1"},[e("label",{for:"security-code",class:"flex items-center text-sm font-medium text-gray-700"},[e("span",null,"Lot Number"),e("svg",{class:"ml-1 h-5 w-5 flex-shrink-0 text-gray-300",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"})])]),e("input",{type:"text",name:"security-code",id:"security-code",autocomplete:"cc-csc",class:"mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"})])])])])])],-1),C={"aria-labelledby":"payment-details-heading"},T={action:"#",method:"POST"},B={class:"shadow sm:overflow-hidden sm:rounded-md"},L={class:"bg-white py-6 px-4 sm:p-6"},z=e("div",null,[e("div",{class:"flex items-center"},[e("h2",{id:"payment-details-heading",class:"text-lg font-medium leading-6 text-gray-900 mr-1"},"Check pariority columns ")]),e("p",{class:"text-sm text-gray-500"},"Check desire column that you want to display ")],-1),H={class:"mt-6 grid grid-cols-4 gap-x-6 gap-y-3"},V=e("input",{id:"comments",name:"comments",type:"checkbox",class:"h-4 w-4 rounded-none border-purple-600 accent-purple-900 bg-purple-600 checked:bg-purple-900 focus:ring-purple-500 mr-2"},null,-1),A={class:"uppercase text-xs"},D={class:"mx-6 shadow-xl",id:"table-to-print"};function N(a,o,P,S,c,d){const i=r("DarButton"),m=r("DarTable");return s(),t("section",v,[e("div",_,[l(i,{onClick:d.printTable,class:"flex items-center justify-end"},{default:y(()=>[w,f(" Print ")]),_:1},8,["onClick"])]),e("div",k,[M,e("section",C,[e("form",T,[e("div",B,[e("div",L,[z,e("div",H,[(s(!0),t(g,null,h(c.options,n=>(s(),t("label",{class:"cursor-pointer hover:bg-gray-50 rounded p-2 border flex items-center",key:n},[V,e("span",A,x(n),1)]))),128))])])])])])]),e("div",D,[l(m,{class:""})])])}const F=u(b,[["render",N]]);export{F as default};