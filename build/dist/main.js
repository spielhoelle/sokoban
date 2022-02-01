(()=>{"use strict";const e="empty",t="wall",o="block",s="success_block",i="void",n="player",l="up",r="down",a="left",h="right",c={[l]:"ArrowUp",[r]:"ArrowDown",[a]:"ArrowLeft",[h]:"ArrowRight",w:"w",a:"a",s:"s",d:"d"},d={empty:{fill:"#54fefe",stroke:"#4ce5e5"},wall:{fill:"#fa56fc",stroke:"#d247d4"},block:{fill:"#d9ae0a",stroke:"#C79300"},success_block:{fill:"#4ccd5a",stroke:"#3ca448"},void:{fill:"#dfbbb1",stroke:"#ca8e7d"},player:{fill:"#4f99e8",stroke:"#3f7ab9"}};let u=[[[t,t,t,t,t,t],[t,e,i,o,n,t],[t,e,e,e,e,t],[t,t,t,t,t,t]],[[t,t,t,t],[t,e,i,t],[t,e,e,t,t,t],[t,s,n,e,e,t],[t,e,e,o,e,t],[t,e,e,t,t,t],[t,t,t,t]],[[t,t,t,t,t,t],[t,e,e,e,e,t],[t,e,t,n,e,t],[t,e,o,s,e,t],[t,e,i,s,e,t],[t,e,e,e,e,t],[t,t,t,t,t,t]],[[e,e,t,t,t,t],[t,t,t,e,e,t,t,t,t],[t,e,e,e,e,e,o,e,t],[t,e,t,e,e,t,o,e,t],[t,e,i,e,i,t,n,e,t],[t,t,t,t,t,t,t,t,t]],[[t,t,t,t,t,t,t,t],[t,e,e,e,e,e,e,t],[t,e,i,s,s,o,n,t],[t,e,e,e,e,e,e,t],[t,t,t,t,t,e,e,t],[e,e,e,e,t,t,t,t]],[[e,t,t,t,t,t,t,t],[e,t,e,e,e,e,e,t],[e,t,e,i,o,i,e,t],[t,t,e,o,n,o,e,t],[t,e,e,i,o,i,e,t],[t,e,e,e,e,e,e,t],[t,t,t,t,t,t,t,t]],[[t,t,t,t,t,t,e,t,t,t,t,t],[t,e,e,e,e,t,t,t,e,e,e,t],[t,e,o,o,e,e,e,e,e,t,n,t],[t,e,o,e,t,i,i,i,e,e,e,t],[t,e,e,e,t,t,t,t,t,t,t,t],[t,t,t,t,t]],[[t,t,t,t,t,t,t],[t,e,e,e,e,e,t],[t,e,i,o,i,e,t],[t,e,o,i,o,e,t],[t,e,i,o,i,e,t],[t,e,o,i,o,e,t],[t,e,e,n,e,e,t],[t,t,t,t,t,t,t]],[[e,e,t,t,t,t,t,t],[e,e,t,e,i,i,n,t],[e,e,t,e,o,o,e,t],[e,e,t,t,e,t,t,t],[e,e,e,t,e,t],[e,e,e,t,e,t],[t,t,t,t,e,t],[t,e,e,e,e,t,t],[t,e,t,e,e,e,t],[t,e,e,e,t,e,t],[t,t,t,e,e,e,t],[e,e,t,t,t,t,t]],[[t,t,t,t,t],[t,i,e,e,t,t],[t,n,o,o,e,t],[t,t,e,e,e,t],[e,t,t,e,e,t],[e,e,t,t,i,t],[e,e,e,t,t,t]],[[e,e,e,e,e,e,t,t,t,t,t],[e,e,e,e,e,e,t,i,e,e,t],[e,e,e,e,e,e,t,i,t,e,t],[t,t,t,t,t,t,t,i,t,e,t],[t,e,n,e,o,e,o,e,o,e,t],[t,e,t,e,t,e,t,e,t,t,t],[t,e,e,e,e,e,e,e,t],[t,t,t,t,t,t,t,t,t]],[[e,e,t,t,t,t,t,t],[e,e,t,e,e,e,e,t],[e,e,t,e,t,t,n,t,t],[t,t,t,e,t,e,o,e,t],[t,e,i,i,t,e,o,e,t],[t,e,e,e,e,e,e,e,t],[t,e,e,t,t,t,t,t,t],[t,t,t,t]],[[t,t,t,t,t],[t,e,e,e,t,t],[t,e,o,e,e,t],[t,t,e,o,e,t,t,t,t],[e,t,t,t,n,i,e,e,t],[e,e,t,e,e,i,t,e,t],[e,e,t,e,e,e,e,e,t],[e,e,t,t,t,t,t,t,t]],[[t,t,t,t],[t,i,e,t,t],[t,i,n,e,t],[t,i,e,o,t],[t,t,o,e,t,t,t],[e,t,e,o,e,e,t],[e,t,e,e,e,e,t],[e,t,e,e,t,t,t],[e,t,t,t,t]],[[t,t,t,t,t,t,t],[t,e,e,e,e,e,t],[t,e,t,e,t,e,t],[t,i,e,o,s,n,t],[t,e,e,e,t,t,t],[t,t,t,t,t]],[[e,e,e,e,e,t,t,t],[t,t,t,t,t,t,n,t,t],[t,e,e,e,e,i,s,e,t],[t,e,e,e,t,e,e,e,t],[t,t,t,t,t,o,t,e,t],[e,e,e,e,t,e,e,e,t],[e,e,e,e,t,t,t,t,t]],[[e,t,t,t,t],[e,t,e,e,t,t,t,t],[e,t,e,e,e,e,e,t,t],[t,t,e,t,t,e,e,e,t],[t,i,e,i,t,e,n,o,t,t],[t,e,e,e,t,e,o,o,e,t],[t,e,e,i,t,e,e,e,e,t],[t,t,t,t,t,t,t,t,t,t]],[[t,t,t,t,t],[t,e,n,e,t],[t,i,i,i,t],[t,o,o,o,t,t],[t,e,e,e,e,t],[t,e,e,e,e,t],[t,t,t,t,t,t]],[[t,t,t,t,t,t,t],[t,e,e,e,e,e,t],[t,i,e,i,e,e,t],[t,e,t,t,e,t,t],[t,e,e,o,e,t],[t,t,t,o,e,t],[e,e,t,n,e,t],[e,e,t,e,e,t],[e,e,t,t,t,t]],[[t,t,t,t,t,t,t,t],[t,e,e,e,i,i,e,t],[t,e,e,n,o,o,e,t],[t,t,t,t,t,e,t,t],[e,e,e,t,e,e,t],[e,e,e,t,e,e,t],[e,e,e,t,e,e,t],[e,e,e,t,t,t,t]],[[t,t,t,t,t,t,t],[t,e,e,e,e,e,t,t,t],[t,e,e,n,o,o,i,i,t],[t,t,t,t,e,t,t,e,t],[e,e,t,e,e,e,e,e,t],[e,e,t,e,e,t,t,t,t],[e,e,t,e,e,t],[e,e,t,t,t,t]],[[t,t,t,t],[t,e,e,t,t,t,t],[t,e,i,e,i,e,t],[t,e,o,o,t,n,t],[t,t,e,e,e,e,t],[e,t,t,t,t,t,t]],[[t,t,t,t,t],[t,e,e,e,t,t,t],[t,i,e,i,e,e,t],[t,e,e,e,t,e,t],[t,t,e,t,e,e,t],[e,t,n,o,o,e,t],[e,t,e,e,e,e,t],[e,t,e,e,t,t,t],[e,t,t,t,t]],[[t,t,t,t,t,t,t],[t,e,e,s,e,e,t],[t,e,e,e,e,e,t],[t,t,e,t,e,t,t],[e,t,o,n,i,t],[e,t,e,e,e,t],[e,t,t,t,t,t]],[[t,e,t,t,t,t,t],[e,e,t,e,e,e,t],[t,t,t,o,o,n,t],[t,e,e,e,t,t,t],[t,e,e,e,e,e,t],[t,e,i,e,i,e,t],[t,t,t,t,t,t,t]],[[e,t,t,t,t],[e,t,e,e,t,t,t],[e,t,e,o,o,e,t],[t,t,i,i,i,e,t],[t,e,e,n,o,e,t],[t,e,e,e,t,t,t],[t,t,t,t,t]],[[e,t,t,t,t,t],[e,t,e,n,e,t],[e,t,e,e,e,t],[t,t,t,o,e,t],[t,e,i,i,i,t],[t,e,o,o,e,t],[t,t,t,e,e,t],[e,e,t,t,t,t]],[[t,t,t,t,t,t],[t,e,e,e,i,t],[t,e,t,t,e,t,t],[t,e,e,o,o,n,t],[t,e,t,e,e,e,t],[t,i,e,e,t,t,t],[t,t,t,t,t]],[[t,t,t,t,t],[t,e,e,e,t],[t,e,n,e,t],[t,e,o,o,t,t,t],[t,t,i,e,i,e,t],[e,t,e,e,e,e,t],[e,t,t,t,t,t,t]],[[e,e,e,e,e,t,t,t,t,t],[e,e,e,e,e,t,e,e,e,t,t],[e,e,e,e,e,t,e,e,e,e,t],[e,t,t,t,t,t,t,e,e,e,t],[t,t,e,e,e,e,e,t,i,e,t],[t,e,o,e,o,e,n,e,e,t,t],[t,e,t,t,t,t,t,t,i,t],[t,e,e,e,e,e,e,e,e,t],[t,t,t,t,t,t,t,t,t,t]],[[t,t,t,t],[t,e,e,t,t,t],[t,e,o,o,e,t],[t,i,i,i,e,t],[t,e,n,o,e,t],[t,e,e,e,t,t],[t,t,t,t,t]],[[e,e,t,t,t,t],[e,t,t,e,e,t],[t,t,n,o,i,t,t],[t,e,o,o,e,e,t],[t,e,i,e,i,e,t],[t,t,t,e,e,e,t],[e,e,t,t,t,t,t]],[[e,t,t,t,t],[t,t,e,e,t,t,t],[t,e,e,e,e,e,t],[t,i,s,s,o,n,t],[t,e,e,e,t,t,t],[t,t,e,e,t],[e,t,t,t,t]],[[t,t,t,t,t,t,t],[t,i,e,t,e,e,t],[t,e,e,o,e,e,t],[t,i,e,o,t,n,t],[t,e,e,o,e,e,t],[t,i,e,t,e,e,t],[t,t,t,t,t,t,t]],[[e,e,t,t,t,t],[t,t,t,e,e,t,t,t,t],[t,e,e,e,e,e,e,e,t],[t,n,o,s,s,s,i,e,t],[t,e,e,e,e,e,e,e,t],[t,t,t,t,t,t,t,t,t]],[[e,e,t,t,t,t],[e,t,t,e,e,t],[e,t,i,e,o,t],[e,t,i,o,e,t],[e,t,i,o,e,t],[e,t,i,o,e,t],[e,t,i,e,o,t,t],[e,t,e,e,e,n,t],[e,t,t,e,e,e,t],[e,e,t,t,t,t,t]],[[t,t,t,t],[t,e,e,t,t,t,t,t,t,t,t,t,t,t,t],[t,e,o,e,o,e,o,e,o,e,o,e,n,e,t],[t,e,i,i,i,i,i,e,e,e,e,e,e,e,t],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t]],[[e,e,e,e,e,e,t,t,t],[t,t,t,t,t,e,t,i,t],[t,e,e,e,t,t,t,i,t],[t,e,e,e,o,e,t,i,t],[t,e,o,e,e,o,e,e,t],[t,t,t,t,t,n,t,e,t],[e,e,e,e,t,e,e,e,t],[e,e,e,e,t,t,t,t,t]],[[t,t,t,t,t,t,t,t,t,t],[t,e,e,e,e,e,e,e,e,t],[t,e,t,t,i,t,t,t,e,t],[t,e,t,e,o,o,e,i,e,t],[t,e,i,e,n,o,t,t,e,t],[t,t,t,t,t,e,e,e,e,t],[e,e,e,e,t,t,t,t,t,t]],[[t,t,t,t,t],[t,e,e,e,t,t,t,t],[t,e,t,e,t,e,i,t],[t,e,e,e,e,o,e,t,t,t],[t,t,t,e,t,o,i,e,e,t],[t,e,e,e,t,n,e,e,e,t],[t,e,t,e,t,t,t,t,t,t],[t,e,e,e,t],[t,t,t,t,t]],[[e,t,t,t,t,t],[e,t,e,e,e,t],[t,t,e,e,e,t,t],[t,e,o,o,o,e,t],[t,e,i,n,i,e,t],[t,t,t,t,t,t,t]],[[t,t,t,t,t,t,t],[t,e,e,e,e,e,t],[t,n,o,o,o,e,t,t],[t,e,e,t,i,i,i,t],[t,t,e,e,e,e,t,t],[e,t,t,t,t,t,t]],[[e,e,e,t,t,t,t],[e,e,e,t,e,e,t],[e,e,e,t,n,e,t],[t,t,t,t,o,i,t],[t,e,e,e,o,i,t],[t,e,t,e,o,i,t],[t,e,e,e,e,t,t],[t,t,t,t,t,t]],[[e,e,e,e,e,t,t,t,t],[e,e,e,e,e,t,e,n,t],[e,e,e,e,e,t,e,e,t],[t,t,t,t,t,t,e,i,t],[t,e,e,e,o,e,e,i,t],[t,e,e,o,o,t,e,i,t],[t,e,e,e,e,t,t,t,t],[t,t,t,e,e,t],[e,e,t,t,t,t]],[[t,t,t,t,t],[t,n,o,i,t],[t,t,t,t,t]],[[t,t,t,t,t,t],[t,i,i,i,e,t],[t,e,e,o,e,t],[t,e,t,o,t,t],[t,e,e,o,e,t],[t,e,e,n,e,t],[t,t,t,t,t,t]],[[e,t,t,t,t,t,t],[t,t,e,e,e,e,t],[t,e,e,t,t,e,t],[t,e,t,e,o,e,t],[t,e,e,s,e,i,t],[t,t,e,t,n,t,t],[e,t,e,e,e,t],[e,t,t,t,t,t]],[[e,e,t,t,t,t,t,t,t],[t,t,t,e,e,e,e,e,t],[t,e,o,e,o,e,e,e,t],[t,e,t,t,t,e,t,t,t,t,t],[t,e,n,e,i,e,i,e,e,e,t],[t,e,e,e,t,t,t,e,e,e,t],[t,t,t,t,t,e,t,t,t,t,t]],[[t,t,t,t,t,t],[t,e,e,n,e,t],[t,e,e,t,e,t,t],[t,e,i,t,e,e,t,t],[t,e,i,o,o,o,e,t],[t,e,i,t,e,e,e,t],[t,t,t,t,e,e,e,t],[e,e,e,t,t,t,t,t]],[[t,t,t,t,t,t],[t,e,n,e,e,t],[t,e,o,t,e,t],[t,e,o,e,e,t],[t,e,o,e,t,t],[t,t,t,e,t,t,t,t],[e,t,e,e,t,e,e,t],[e,t,i,i,i,e,e,t],[e,t,e,e,e,e,e,t],[e,t,t,t,t,t,t,t]],[[e,e,t,t,t,t],[t,t,t,e,e,t,t,t,t,t],[t,e,e,o,e,e,n,i,i,t],[t,e,o,e,e,e,e,t,e,t],[t,t,t,e,t,t,t,t,e,t],[e,e,t,e,e,e,e,e,e,t],[e,e,t,t,t,t,t,t,t,t]],[[t,t,t,t],[t,e,e,t,t,t],[t,e,e,e,e,t,t,t],[t,e,e,o,s,n,e,t],[t,t,t,e,i,t,e,t],[e,e,t,e,e,e,e,t],[e,e,t,t,t,t,t,t]],[[e,e,t,t,t,t],[t,t,t,e,n,t],[t,e,e,o,e,t],[t,e,e,s,i,t],[t,e,e,s,i,t],[t,e,e,o,e,t],[t,t,t,e,e,t],[e,e,t,t,t,t]],[[e,t,t,t,t,t],[t,t,i,e,i,t,t],[t,e,s,e,s,e,t],[t,e,e,t,e,e,t],[t,e,o,e,o,e,t],[t,t,e,n,e,t,t],[e,t,t,t,t,t]],[[e,e,e,e,e,e,t,t,t,t,t,t],[e,e,e,e,e,e,t,e,e,e,e,t],[e,e,t,t,t,t,t,e,i,e,e,t],[t,t,t,e,e,t,t,t,i,e,e,t],[t,e,o,e,e,o,e,e,i,e,t,t],[t,e,n,o,o,e,t,e,i,e,t],[t,t,e,e,e,e,t,t,t,t,t],[e,t,t,t,t,t,t]],[[t,t,t,t,t,t,t,t],[t,e,n,e,t,e,e,t],[t,e,e,e,e,e,e,t],[t,t,t,t,t,o,e,t],[e,e,e,e,t,e,e,t,t,t],[e,t,t,e,t,o,e,i,i,t],[e,t,t,e,t,e,e,t,t,t],[e,e,e,e,t,t,t,t]],[[t,t,t,t,t],[t,e,e,e,t,t,t],[t,e,e,o,e,e,t],[t,t,s,e,i,e,t],[e,t,e,e,e,n,t],[e,t,t,t,t,t,t]],[[e,e,t,t,t,t],[e,e,t,e,e,t],[e,e,t,n,e,t],[e,e,t,e,e,t],[t,t,t,e,t,t,t,t],[t,e,e,e,e,s,e,t],[t,e,e,o,e,e,e,t],[t,t,t,t,t,i,e,t],[e,e,e,e,t,t,t,t]],[[t,t,t,t],[t,e,e,t,t,t,t],[t,i,s,o,e,e,t],[t,e,i,o,t,e,t],[t,t,e,n,e,e,t],[e,t,e,e,e,t,t],[e,t,t,t,t,t]],[[t,t,t,t,t,t,t,t,t,t,t,t],[t,e,e,e,e,e,e,e,e,e,e,t],[t,e,t,t,t,t,t,t,t,e,n,t,t],[t,e,t,e,e,e,e,e,e,e,e,e,t],[t,e,t,e,e,o,e,e,e,t,e,e,t],[t,e,o,o,e,t,t,t,t,t,e,e,t],[t,t,t,e,e,t,e,t,e,i,i,i,t],[e,e,t,t,t,t,e,t,e,e,e,e,t],[e,e,e,e,e,e,e,t,t,t,t,t,t]],[[e,t,t,t,t,t,t,t,t,t],[e,t,e,e,e,e,e,e,e,t],[t,t,n,t,t,t,t,t,e,t],[t,e,e,t,e,e,e,t,e,t],[t,e,e,t,e,e,e,o,i,t],[t,e,e,t,t,o,t,t,i,t],[t,t,o,t,t,e,e,t,i,t],[t,e,e,e,o,e,e,t,i,t],[t,e,e,e,t,e,e,t,t,t],[t,t,t,t,t,t,t,t]],[[t,t,t,t,t,t,t,t],[t,e,e,e,e,e,e,t],[t,e,t,t,t,t,e,t],[t,e,t,i,i,i,n,t],[t,e,t,t,t,o,t,t,t],[t,e,t,e,e,e,e,e,t],[t,e,e,o,o,e,o,e,t],[t,t,t,t,e,e,e,t,t],[e,e,e,t,i,t,t,t],[e,e,e,t,t,t]],[[e,e,e,t,t,t,t,t,t,t,t,t,t],[t,t,t,t,e,e,e,e,t,t,e,e,t],[t,e,e,o,o,o,i,i,i,i,o,n,t],[t,e,e,e,e,e,e,t,t,t,e,e,t],[t,e,e,e,t,t,t,t,e,t,t,t,t],[t,t,t,t,t]],[[t,t,t,t,t,e,e,e,t,t,t,t],[t,e,e,e,t,t,t,t,t,e,i,t],[t,e,e,e,e,e,e,e,o,e,e,t,t,t,t,t,t,t,t],[t,t,t,e,e,t,t,t,t,e,i,o,e,e,e,e,n,e,t],[e,e,t,e,e,t,e,e,t,e,e,t,t,t,t,e,e,e,t],[e,e,t,t,t,t,e,e,t,t,t,t,e,e,t,t,t,t,t]],[[e,t,t,t,t,t,t],[t,t,e,e,e,e,t],[t,e,e,e,o,e,t],[t,e,e,o,o,e,t],[t,t,t,e,i,t,t,t,t,t],[e,e,t,t,i,t,e,n,e,t],[e,e,e,t,i,e,e,o,e,t],[e,e,e,t,i,e,t,t,t,t],[e,e,e,t,t,t,t]],[[e,e,t,t,t,t,t,t],[e,e,t,e,e,e,e,t],[e,e,t,e,e,o,e,t],[e,t,t,t,t,o,e,t],[t,t,e,o,e,o,e,t],[t,i,i,i,i,t,e,t,t],[t,e,e,e,e,e,n,e,t],[t,t,e,e,t,e,e,e,t],[e,t,t,t,t,t,t,t,t]],[[e,e,e,t,t,t],[e,e,e,t,n,t],[e,t,t,t,o,t,t,t],[t,t,e,e,i,e,e,t,t],[t,e,e,t,e,t,e,e,t],[t,e,t,e,e,e,t,e,t],[t,e,t,e,e,e,t,e,t],[t,e,t,e,e,e,t,e,t],[t,e,e,t,e,t,e,e,t],[t,t,e,o,e,o,e,t,t],[e,t,t,i,e,i,t,t],[e,e,t,e,e,e,t],[e,e,t,e,e,e,t],[e,e,t,t,t,t,t]],[[t,t,t,t,t],[t,e,e,e,t,t],[t,e,t,e,e,t],[t,n,o,s,i,t,t],[t,t,e,e,i,e,t],[e,t,e,o,t,e,t],[e,t,t,e,e,e,t],[e,e,t,t,t,t,t]],[[e,t,t,t,t],[e,t,e,e,t,t,t,t,t,t],[t,t,e,e,e,e,o,e,e,t],[t,e,i,t,e,o,e,e,e,t],[t,e,i,t,o,t,t,t,t,t],[t,e,i,n,e,t],[t,t,t,t,t,t]],[[t,t,t,t,e,e,t,t,t,t],[t,e,e,t,t,t,t,e,e,t],[t,e,e,t,e,e,t,e,e,t],[t,e,e,t,e,e,e,e,o,t,t],[t,e,e,i,e,i,t,o,e,e,t],[t,n,e,t,t,e,t,e,o,e,t],[t,e,e,e,i,e,t,e,e,e,t],[t,t,t,t,t,t,t,t,t,t,t]],[[t,t,t,t,t],[t,e,n,e,t,t,t,t],[t,e,e,e,e,e,e,t],[t,e,o,e,o,o,e,t],[t,t,o,t,t,e,e,t],[t,e,e,e,t,t,t,t],[t,e,i,i,e,e,t],[t,t,i,i,e,e,t],[e,t,t,t,e,e,t],[e,e,e,t,t,t,t]],[[t,t,t,t,t,t,t,t,t,t,t],[t,e,e,e,e,e,t,e,e,e,t,t,t],[t,e,o,n,o,e,t,e,i,e,e,i,t],[t,e,t,t,e,t,t,t,e,t,t,e,t],[t,e,t,e,e,e,e,e,e,e,t,e,t],[t,e,t,e,e,e,t,e,e,e,t,e,t],[t,e,t,t,t,t,t,t,t,t,t,e,t],[t,e,e,e,e,e,e,e,e,e,e,e,t],[t,t,t,t,t,t,t,t,t,t,t,t,t]],[[e,e,t,t,t,t],[e,t,t,e,e,t,t,t,t,t],[e,t,e,e,o,e,e,n,e,t],[e,t,e,e,o,t,e,e,e,t],[t,t,t,t,e,t,t,t,t,t],[t,e,e,t,e,e,e,t],[t,e,e,e,e,o,e,t],[t,e,i,i,t,e,e,t],[t,e,e,i,t,t,t,t],[t,e,e,t,t],[t,t,t,t]],[[t,t,t,t],[t,e,e,t,t,t,t,t],[t,e,o,o,e,o,e,t],[t,e,e,e,e,e,e,t],[t,t,e,t,t,e,t,t],[t,i,i,i,t,n,t],[t,e,t,t,t,e,t,t],[t,e,e,e,e,e,e,t],[t,e,e,t,e,e,e,t],[t,t,t,t,t,t,t,t]],[[e,t,t,t,t],[e,t,e,e,t,t,t,t,t,t,t],[e,t,o,e,n,t,e,e,e,i,t],[t,t,e,t,o,o,e,e,e,i,t],[t,e,e,o,e,e,t,t,i,i,t],[t,e,e,e,t,e,t,t,t,t,t],[t,t,t,e,e,e,t],[e,e,t,t,t,t,t]],[[e,t,t,t,t,t,t,t],[t,t,e,i,i,i,i,t,t],[t,e,e,e,t,t,t,t,t,t],[t,e,e,e,o,e,o,e,n,t],[t,t,t,e,e,o,e,o,e,t],[e,e,t,t,t,e,e,e,e,t],[e,e,e,e,t,t,t,t,t,t]],[[e,t,t,t,t,t],[t,t,e,e,e,t],[t,e,e,e,e,t,t,t,t,t],[t,e,e,t,i,t,e,e,e,t],[t,n,e,t,i,t,e,o,e,t],[t,e,e,t,i,t,e,e,t,t],[t,e,e,e,e,t,e,e,t],[t,t,e,e,t,t,o,o,t],[e,t,t,e,e,e,e,e,t],[e,e,t,e,e,t,t,t,t],[e,e,t,t,t,t]],[[t,t,t,t,t,t,t,t,t,t],[t,e,n,e,i,i,i,i,e,t],[t,e,e,e,t,t,t,t,o,t,t],[t,t,e,t,e,e,o,e,o,e,t],[e,t,e,o,e,e,e,e,e,e,t],[e,t,e,e,e,t,t,t,t,t,t],[e,t,t,t,t,t]],[[e,t,t,t,t,t,t,t],[t,t,e,e,e,e,e,t,t],[t,e,e,o,e,o,e,e,t],[t,e,o,e,o,e,o,e,t],[t,t,e,t,t,t,e,t,t,t,t],[e,t,n,e,e,i,i,i,i,i,t],[e,t,t,e,e,e,e,e,t,t,t],[e,e,t,t,t,t,t,t,t]],[[e,t,t,t,t,t,t,t,t,t],[e,t,e,e,e,e,t,e,e,t],[t,t,e,o,t,o,t,e,e,t],[t,e,e,i,o,i,n,e,e,t],[t,e,e,i,t,e,e,e,e,t],[t,t,t,t,t,t,t,t,t,t]],[[t,t,t,t],[t,e,e,t,t,t,t,t,t,t],[t,e,e,i,e,t,t,e,i,t],[t,e,o,t,e,e,e,e,i,t],[t,t,e,t,t,e,t,e,i,t],[e,t,e,e,e,e,t,e,e,t],[e,t,t,t,t,e,t,e,e,t],[e,e,t,e,n,o,e,t,t,t],[e,e,t,e,o,o,e,t],[e,e,t,e,e,e,e,t],[e,e,t,t,t,t,t,t]],[[e,t,t,t,t,t],[e,t,e,e,e,t],[e,t,e,i,e,t],[t,t,e,s,e,t],[t,e,e,s,t,t],[t,e,e,n,t,t],[t,t,e,o,e,t],[e,t,e,e,e,t],[e,t,t,t,t,t]],[[t,t,t,t,t],[t,e,e,e,t,t,t],[t,e,i,e,e,e,t,t],[t,t,s,t,o,e,e,t],[t,e,i,t,e,o,e,t],[t,e,n,t,t,e,t,t],[t,e,e,e,e,e,t],[t,t,t,t,t,t,t]],[[t,t,t,t,t,t],[t,e,e,e,e,t,t],[t,e,o,e,o,e,t,t],[t,t,e,o,o,e,e,t],[e,t,e,t,e,e,e,t],[e,t,e,t,t,e,t,t],[e,t,e,e,i,e,i,t],[e,t,e,n,i,e,i,t],[e,t,e,e,t,t,t,t],[e,t,t,t,t]],[[t,t,t,t,t,t,t,t],[t,e,e,i,i,i,e,t],[t,e,e,t,t,t,e,t,t],[t,e,e,t,e,o,e,e,t],[t,t,e,t,n,o,e,e,t],[e,t,e,t,e,o,e,e,t],[e,t,e,t,t,t,e,t,t,t,t,t],[e,t,e,e,e,e,e,e,e,e,e,t],[e,t,e,e,e,t,t,t,e,e,e,t],[e,t,t,t,t,t,e,t,t,t,t,t]],[[e,e,e,e,e,e,e,t,t,t,t],[e,t,t,t,t,t,t,t,e,e,t],[e,t,e,o,e,e,e,e,e,e,t],[e,t,e,e,e,o,e,o,e,e,t],[e,t,e,t,t,t,t,t,t,t,t],[t,t,e,t,e,i,e,e,t],[t,e,e,t,e,t,e,e,t],[t,e,e,n,e,i,e,t,t],[t,t,e,t,e,t,e,t],[e,t,e,e,e,i,e,t],[e,t,t,t,t,t,t,t]],[[e,e,e,e,t,t,t,t],[e,e,t,t,t,e,e,t,t],[e,t,t,e,o,e,e,e,t],[t,t,e,o,e,e,t,e,t],[t,e,n,t,o,o,e,e,t],[t,e,i,i,e,e,t,t,t],[t,e,i,i,t,t,t],[t,t,t,t,t]],[[e,e,e,e,e,t,t,t,t],[t,t,t,t,t,t,e,e,t],[t,e,e,e,e,e,e,e,t],[t,e,e,i,i,i,e,i,t],[t,t,o,t,t,t,t,t,t],[t,e,o,e,e,t],[t,e,e,e,o,t,t,t],[t,t,e,e,o,e,e,t],[e,t,t,e,n,e,e,t],[e,e,t,t,t,t,t,t]],[[e,e,e,e,e,t,t,t,t],[e,t,e,t,t,t,e,e,t],[e,t,e,t,e,e,e,e,t],[e,t,e,t,e,e,t,e,t],[e,t,e,t,o,e,t,i,t],[e,t,e,t,e,e,t,e,t,e,t],[e,t,e,t,o,e,t,i,t,e,t],[e,e,e,t,e,e,t,e,t,e,t],[t,t,t,t,o,e,t,i,t,e,t],[t,e,n,e,e,e,e,e,t,e,t],[t,e,e,e,t,e,e,t,t,e,t],[t,t,t,t,t,t,t,t]],[[t,t,t,t,t,t,t,t,t,t],[t,e,e,e,t,t,e,e,e,t],[t,e,o,e,e,o,n,t,e,t],[t,t,t,t,e,t,e,o,e,t],[e,e,e,t,i,t,e,e,t,t],[e,t,e,t,i,t,e,o,t],[e,t,e,t,i,e,e,e,t],[e,t,e,t,i,e,e,e,t],[e,e,e,t,t,t,t,t,t]],[[e,t,t,t,t,t,t,t,t],[e,t,e,e,n,e,e,e,t],[e,t,e,o,e,e,o,e,t],[t,t,t,e,t,t,e,t,t,t],[t,e,e,o,i,i,o,e,e,t],[t,e,e,e,i,i,e,e,e,t],[t,t,t,t,t,t,t,t,t,t]],[[t,t,t,t,t,t,t,t,t,t,t],[t,e,e,e,e,i,t,t,e,e,t],[t,e,o,o,n,i,i,o,o,e,t],[t,e,e,e,t,t,i,e,e,e,t],[t,t,t,t,t,t,t,t,t,t,t]],[[e,e,t,t,t,t],[e,e,t,e,e,t,e,e,e,e,t,t,t,t,t],[e,e,t,e,e,t,e,e,e,e,t,e,e,e,t],[e,e,t,e,e,t,t,t,t,t,t,i,t,e,t],[t,t,t,t,e,e,o,e,e,e,e,i,e,e,t],[t,e,e,e,o,o,t,e,t,t,t,i,t,e,t],[t,e,e,e,t,e,e,e,t,e,t,e,e,e,t],[t,t,t,t,t,t,t,t,t,e,t,n,e,t,t],[e,e,e,e,e,e,e,e,e,e,t,e,e,t],[e,e,e,e,e,e,e,e,e,e,t,t,t,t]],[[e,t,t,t,t,t,t,t,t,t],[t,t,e,e,e,t,e,e,e,t,t],[t,e,e,e,e,t,e,e,e,e,t],[t,e,e,o,e,t,e,o,e,e,t],[t,e,e,e,s,i,s,e,e,e,t],[t,t,t,t,i,n,i,t,t,t,t],[t,e,e,e,s,i,s,e,e,e,t],[t,e,e,o,e,t,e,o,e,e,t],[t,e,e,e,e,t,e,e,e,e,t],[t,t,e,e,e,t,e,e,e,t,t],[e,t,t,t,t,t,t,t,t,t]],[[t,t,t,t,t,t,t,t,t],[t,e,n,e,t,e,e,e,t],[t,e,o,e,o,e,e,e,t],[t,t,o,t,t,t,e,t,t],[t,e,e,i,i,i,e,e,t],[t,e,e,e,t,e,e,e,t],[t,t,t,t,t,t,e,e,t],[e,e,e,e,e,t,t,t,t]],[[t,t,t,t,t,t,t,t],[t,n,e,e,e,e,e,t],[t,e,i,o,o,i,e,t],[t,e,o,i,i,o,e,t],[t,e,o,i,i,o,e,t],[t,e,i,o,o,i,e,t],[t,e,e,e,e,e,e,t],[t,t,t,t,t,t,t,t]],[[e,e,t,t,t,t,t,t],[e,e,t,e,e,e,e,t],[e,e,t,e,e,e,e,t],[t,t,t,t,t,e,e,t],[t,e,e,e,t,i,t,t,t,t,t],[t,e,e,e,o,n,o,e,e,e,t],[t,t,t,t,t,i,t,e,e,e,t],[e,e,e,t,t,e,t,t,e,t,t],[e,e,e,t,e,e,e,o,i,t],[e,e,e,t,e,e,e,t,t,t],[e,e,e,t,t,t,t,t]],[[e,e,e,t,t,t,t],[e,e,e,t,e,e,t,t,t,t,t,t,t,t],[t,t,t,t,e,o,e,o,i,i,i,i,i,t],[t,e,e,e,o,e,e,e,t,t,t,t,t,t],[t,n,t,t,t,e,t,t,t],[t,e,e,o,e,e,t],[t,e,o,e,t,e,t],[t,t,e,t,e,e,t],[e,t,e,e,e,e,t],[e,t,t,t,t,t,t]],[[t,t,t,t,t],[t,e,e,e,t,t,e,t,t,t,t],[t,e,e,o,e,t,t,t,e,i,t],[t,e,o,e,e,e,o,e,e,i,t],[t,t,e,o,t,t,t,t,t,i,t,e,t,t,t,t],[t,e,o,e,e,t,e,t,e,i,t,t,t,e,e,t],[t,e,e,e,e,t,e,t,e,i,t,e,e,n,e,t],[t,t,t,e,e,t,e,t,e,e,e,e,e,e,e,t],[e,e,t,t,t,t,e,t,t,e,e,e,e,e,t,t],[e,e,e,e,e,e,e,e,t,t,t,t,t,t,t]],[[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,t,t,t,t,t],[e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,t,e,e,e,t],[t,t,t,t,t,t,t,e,e,t,t,t,t,t,t,t,e,t,e,t],[t,e,e,e,e,e,t,e,e,t,e,e,t,e,e,e,e,e,e,t],[t,e,e,n,e,e,t,t,t,t,e,e,t,e,e,e,e,e,t,t,t,t],[t,e,e,t,e,e,e,e,i,i,i,i,t,t,e,t,t,t,t,e,e,t],[t,e,e,e,e,t,t,t,t,t,e,t,t,e,o,o,e,o,e,o,e,t],[t,t,t,t,t,t,e,e,e,t,e,e,e,e,e,e,e,e,e,e,e,t],[e,e,e,e,e,e,e,e,e,t,e,e,t,t,t,t,t,t,t,t,t,t],[e,e,e,e,e,e,e,e,e,t,t,t,t]],[[t,t,t,t,t,t,t],[t,e,n,t,e,e,t],[t,i,o,e,e,e,t],[t,i,e,t,e,o,t,t],[t,i,o,t,e,e,e,t],[t,i,e,t,e,o,e,t],[t,e,e,t,e,e,e,t],[t,t,t,t,t,t,t,t]],[[e,e,t,t,t,t,t],[e,e,t,e,e,e,t],[e,e,t,e,t,e,t,t,t,t,t,t,t],[e,e,t,e,e,s,e,e,t,e,e,e,t],[e,e,t,t,e,t,t,e,e,e,t,e,t],[e,e,t,e,e,e,e,e,t,s,e,e,t],[t,t,t,e,t,e,t,e,t,e,t,t,t],[t,e,e,s,t,o,n,e,e,e,t],[t,e,t,e,e,e,t,t,e,t,t],[t,e,e,e,t,e,e,s,e,e,t],[t,t,t,t,t,t,t,e,t,e,t],[e,e,e,e,e,e,t,e,e,e,t],[e,e,e,e,e,e,t,t,t,t,t]],[[t,t,t,t,t,t,t,t,t,t,t],[t,i,i,i,i,t,e,e,e,e,t],[t,e,e,t,e,e,e,o,o,e,t],[t,e,e,n,e,e,t,t,e,e,t],[t,e,e,e,e,e,t,t,o,e,t],[t,t,t,t,t,t,e,e,o,e,t],[e,e,e,e,e,t,e,e,e,e,t],[e,e,e,e,e,t,t,t,t,t,t]],[[e,e,t,t,t,t,t],[e,e,t,e,i,e,t,t],[t,t,t,e,o,e,e,t],[t,e,i,e,o,t,n,t],[t,e,t,o,e,i,e,t],[t,e,e,o,e,t,t,t],[t,t,e,i,e,t],[e,t,t,t,t,t]],[[e,e,e,e,t,t,t,t,t],[t,t,t,t,t,e,e,e,t],[t,e,e,e,e,o,e,e,t],[t,e,e,o,t,o,t,n,t],[t,t,t,e,t,e,e,e,t],[e,e,t,e,i,i,i,e,t],[e,e,t,t,t,e,e,t,t],[e,e,e,e,t,e,e,t],[e,e,e,e,t,t,t,t]],[[e,t,t,t,t,e,t,t,t,t],[t,t,e,e,t,t,t,e,e,t,t],[t,e,e,e,t,e,t,e,e,e,t],[t,e,e,s,i,e,i,s,e,e,t],[t,t,t,o,e,e,e,o,t,t,t],[e,t,e,e,e,n,e,e,e,t],[t,t,t,o,e,e,e,o,t,t,t],[t,e,e,s,i,e,i,s,e,e,t],[t,e,e,e,t,e,t,e,e,e,t],[t,t,e,e,t,t,t,e,e,t,t],[e,t,t,t,t,e,t,t,t,t]],[[e,t,t,t,t,t,t,t,t],[e,t,e,e,e,e,e,e,t],[e,t,n,e,e,e,o,e,t],[t,t,e,t,t,t,o,e,t],[t,e,i,i,i,i,i,t,t,t],[t,e,o,e,o,e,o,e,e,t],[t,t,t,t,t,t,e,t,e,t],[e,e,e,e,e,t,e,e,e,t],[e,e,e,e,e,t,t,t,t,t]],[[t,t,t,t,t,t,t,t],[t,e,e,e,e,e,e,t],[t,e,o,s,s,s,e,t],[t,e,s,e,e,s,e,t],[t,e,s,e,e,s,e,t],[t,e,s,s,s,i,e,t],[t,e,e,e,e,e,n,t],[t,t,t,t,t,t,t,t]],[[t,t,t,t,e,e,e,e,e,t,t,t,t,t],[t,e,e,t,t,t,e,e,e,t,e,e,e,t,t],[t,e,e,e,e,t,e,e,e,t,o,e,o,e,t],[t,i,i,t,e,t,t,t,t,t,e,t,e,e,t],[t,e,e,n,e,e,e,e,t,e,o,e,o,e,t],[t,i,i,t,e,e,e,e,e,e,e,e,e,t,t],[t,t,e,e,e,t,t,t,t,t,t,t,t,t],[e,t,t,t,t,t]],[[e,e,t,t,t,t,t,t,t],[t,e,t,e,e,e,e,e,t],[t,e,t,e,t,e,t,e,t],[e,e,t,e,n,e,o,e,t],[t,t,t,e,t,t,t,e,t],[t,e,e,e,t,t,t,e,t],[t,e,o,e,e,t,t,i,t],[t,t,e,o,e,e,t,i,t],[e,t,t,e,o,e,e,i,t],[t,e,t,t,e,o,t,i,t],[t,t,e,t,t,e,t,i,t],[t,t,t,e,t,e,e,e,t],[t,t,t,e,t,t,t,t,t]],[[e,e,t,t,t,t],[e,e,t,e,e,t],[e,e,t,e,o,t,t,t,t],[t,t,t,i,e,i,e,e,t],[t,e,o,e,t,e,o,e,t],[t,e,e,i,e,i,t,t,t],[t,t,t,t,o,e,t],[e,e,e,t,e,n,t],[e,e,e,t,t,t,t]],[[t,t,t,t,t,t],[t,e,e,e,e,t,t,t,t],[t,e,e,e,e,i,i,i,t],[t,e,e,e,e,i,i,i,t],[t,t,t,t,t,t,e,e,t],[e,e,t,e,e,t,e,e,t],[e,e,t,e,o,o,e,t,t],[e,e,t,e,n,o,e,e,t],[e,e,t,e,o,o,e,e,t],[e,e,t,t,e,o,t,e,t],[e,e,e,t,e,e,e,e,t],[e,e,e,t,t,t,t,t,t]],[[e,t,t,t,t,t],[t,t,e,e,e,t,t,t,t],[t,e,e,o,o,o,e,e,t],[t,e,t,e,e,e,o,e,t],[t,e,e,e,o,t,t,e,t,t],[t,t,t,e,e,t,i,e,e,t],[e,e,t,e,e,t,e,e,e,t],[e,t,t,t,t,t,e,t,t,t],[e,t,e,e,e,t,e,t,t],[e,t,e,n,i,i,i,i,t],[e,t,e,e,e,e,e,e,t],[e,t,e,e,e,t,e,e,t],[e,t,t,t,t,t,t,t,t]],[[e,e,e,t,t,t,t,t],[e,e,t,t,e,e,e,t],[t,t,t,e,e,t,e,t],[t,e,e,e,e,i,e,t],[t,e,e,t,t,e,t,t,t,t,t],[t,e,e,i,e,i,e,t,e,e,t,t],[t,e,e,t,e,n,e,o,e,e,e,t,t,t],[t,t,t,t,t,i,e,t,e,e,o,e,e,t],[e,e,e,e,t,t,t,t,e,e,o,e,e,t],[e,e,e,e,e,e,e,t,t,e,o,e,t,t],[e,e,e,e,e,e,e,e,t,e,e,t,t],[e,e,e,e,e,e,e,e,t,e,e,t],[e,e,e,e,e,e,e,e,t,t,t,t]],[[t,t,t,t,t,t],[t,e,e,e,e,t,t,t],[t,e,e,t,e,o,e,t],[t,e,e,o,e,n,e,t],[t,t,e,t,t,e,t,t,t,t,t],[t,e,e,t,i,i,i,i,i,i,t],[t,e,o,e,o,e,o,e,o,e,t],[t,t,e,e,e,t,t,t,t,t,t],[e,t,t,t,t,t]],[[e,e,e,e,t,t,t,t,t],[t,t,t,t,t,e,e,e,t,t,t,t],[t,e,e,e,e,e,t,e,e,e,e,t],[t,e,e,t,i,i,i,i,i,e,e,t],[t,t,e,e,t,t,e,t,e,t,t,t],[e,t,o,o,n,o,o,o,e,t],[e,t,e,e,e,e,e,t,t,t],[e,t,t,t,t,t,t,t]],[[e,e,e,e,e,t,t,t,t,t],[e,e,e,t,t,t,e,e,e,t],[t,t,t,t,i,i,i,i,i,t],[t,e,n,o,o,o,o,o,e,t],[t,e,e,e,e,e,t,e,t,t],[t,t,t,t,t,e,e,e,t],[e,e,e,e,t,t,t,t,t]],[[e,t,t,t,t,e,t,t,t,t],[e,t,e,e,t,t,t,e,e,t,t],[e,t,e,e,e,e,e,e,n,e,t],[t,t,i,i,t,t,t,e,e,e,t],[t,e,e,e,e,e,e,t,e,e,t],[t,i,i,i,t,o,e,e,t,e,t],[t,e,t,t,e,o,o,e,o,e,t],[t,e,e,o,e,e,e,e,t,t,t],[t,t,t,t,e,e,t,t,t],[e,e,e,t,t,t,t]],[[e,t,t,t,t,t],[t,t,e,e,e,t,t],[t,e,e,o,e,e,t,t],[t,e,o,e,o,e,e,t,t],[t,t,t,o,t,e,i,e,t,t],[e,e,t,e,t,e,i,e,e,t],[e,t,t,e,t,t,i,e,e,t],[e,t,e,n,e,e,i,e,t,t],[e,t,e,e,e,t,e,e,t],[e,t,t,t,t,t,t,t,t]],[[e,e,t,t,t,t,t,t],[e,e,t,e,e,e,e,t,t],[e,t,t,e,t,t,e,e,t],[e,t,e,o,o,e,t,e,t],[e,t,e,n,o,e,t,e,t],[e,t,e,e,e,e,t,e,t],[t,t,t,t,e,t,e,e,t],[t,e,e,i,i,i,e,t,t],[t,e,e,e,e,e,t,t],[t,t,t,t,t,t,t]],[[e,e,e,e,e,e,t,t,t,t],[t,t,t,t,t,t,t,e,e,t],[t,e,o,e,e,e,e,e,e,t,t],[t,e,o,t,t,t,t,t,e,e,t],[t,e,e,n,t,e,e,t,e,e,t],[t,t,e,t,t,i,i,e,e,e,t],[t,e,e,t,e,i,i,t,t,t,t],[t,e,o,e,e,t,t,t],[t,e,o,t,t,t],[t,e,e,t],[t,t,t,t]],[[e,t,t,t,t,t,t],[e,t,e,i,e,e,t],[t,t,o,i,t,e,t],[t,e,e,s,e,e,t],[t,e,i,i,t,t,t],[t,t,o,e,t,e,t,t,t,t,t],[t,t,e,t,t,e,t,e,e,e,t],[t,e,e,t,t,t,t,e,t,e,t],[t,e,e,e,n,e,o,e,o,e,t],[t,t,e,e,t,e,e,e,e,e,t],[e,t,t,t,t,t,t,t,t,t,t]],[[t,t,t,t,t],[t,e,e,e,t,t,t],[t,e,t,o,e,e,t],[t,e,o,e,e,e,t],[t,e,o,e,o,e,t],[t,e,o,t,e,e,t],[t,e,e,n,t,t,t],[t,t,e,t,t,t,t,t,t,t,t],[t,e,e,e,e,e,e,i,i,i,t],[t,e,e,e,e,e,e,e,e,e,t],[t,t,t,t,t,t,t,t,i,i,t],[e,e,e,e,e,e,e,t,t,t,t]],[[t,t,t,t,t,t,t,t],[t,e,e,e,e,e,e,t],[t,e,o,e,o,o,e,t,t,t,t,t,t,t,t],[t,t,t,t,t,e,n,t,t,i,e,i,e,e,t],[e,e,e,e,t,o,e,e,t,e,i,e,e,e,t],[e,e,e,e,t,e,e,e,t,i,e,i,e,t,t],[e,e,e,e,t,o,t,e,t,t,e,t,e,t],[e,e,e,e,t,e,e,e,e,e,e,e,e,t],[e,e,e,e,t,e,e,t,t,t,e,e,t,t],[e,e,e,e,t,e,e,t,e,t,t,t,t],[e,e,e,e,t,t,t,t]],[[t,t,t,t,t,t,t,t,t,t,t,t,t,t],[t,e,e,e,e,e,e,t,e,e,e,e,e,t],[t,e,o,n,o,o,e,t,e,i,e,i,i,t],[t,t,e,t,t,e,t,t,t,e,t,t,e,t],[e,t,e,t,e,e,e,e,e,e,e,t,e,t],[e,t,e,t,e,e,e,t,e,e,e,t,e,t],[e,t,e,t,t,t,t,t,t,t,t,t,e,t],[e,t,e,e,e,e,e,e,e,e,e,e,e,t],[e,t,t,t,t,t,t,t,t,t,t,t,t,t]],[[e,e,e,e,e,e,t,t,t,t,t],[e,e,e,e,e,e,t,e,e,e,t,t],[e,e,e,e,e,e,t,e,o,e,e,t],[t,t,t,t,t,t,t,t,e,t,n,t,t],[t,e,i,e,e,t,e,o,e,o,e,e,t],[t,e,e,e,e,e,e,e,e,o,t,e,t],[t,i,i,i,t,t,t,t,t,e,e,e,t],[t,t,t,t,t,e,e,e,t,t,t,t,t]],[[e,t,t,t,t,t,t,t,t,t,t,t],[t,t,i,i,i,i,i,i,i,e,e,t],[t,e,o,o,o,o,o,o,o,n,e,t],[t,e,e,e,t,e,t,e,t,e,t,t],[t,e,t,e,t,e,e,e,e,e,t],[t,e,e,e,t,t,t,t,t,t,t],[t,t,t,t,t]],[[t,t,e,t,t,t,t],[t,t,t,t,e,e,t,t,t,t],[e,t,e,o,e,o,i,e,e,t],[t,t,e,t,e,e,i,o,e,t],[t,e,e,e,t,t,i,t,t,t],[t,e,e,o,e,e,i,e,t],[t,e,n,e,t,e,e,e,t],[t,e,e,t,t,t,t,t,t],[t,t,t,t]],[[e,e,t,t,t,t,t,t,t,t,t],[t,t,t,e,e,e,t,e,e,e,t],[t,e,s,e,o,e,i,e,i,e,t],[t,e,e,e,o,e,t,t,e,t,t],[t,t,t,t,s,t,e,e,e,t],[e,t,e,e,n,e,e,t,t,t],[e,t,e,e,e,t,t,t],[e,t,t,t,t,t]],[[e,e,t,t,t,t,t,t,t,t,t],[t,t,t,e,n,e,t,e,e,e,t],[t,e,s,e,o,e,s,i,i,e,t],[t,e,e,e,o,e,t,e,e,e,t],[t,t,t,t,s,t,e,e,t,t,t],[e,t,e,e,e,e,e,t,t],[e,t,e,e,e,t,t,t],[e,t,t,t,t,t]],[[t,t,t,t,t,e,e,t,t,t,t,t],[t,e,e,e,t,t,t,t,i,i,e,t],[t,e,o,o,o,e,e,e,e,e,e,t],[t,e,e,e,o,t,e,e,i,i,e,t],[t,t,t,e,n,t,e,e,t,t,e,t],[e,e,t,e,e,t,t,e,e,e,e,t],[e,e,t,t,t,t,t,t,t,t,t,t]],[[t,t,t,t,t],[t,e,e,e,t],[t,e,i,e,t],[t,i,n,i,t,t,t],[t,t,i,t,e,e,t],[t,e,e,o,e,e,t],[t,e,o,e,e,e,t],[t,t,o,o,e,e,t],[e,t,e,e,t,t,t],[e,t,e,e,t],[e,t,t,t,t]],[[t,t,t,t],[t,e,n,t,t,t],[t,i,s,e,e,t,t,t,t,t],[t,i,i,t,o,o,e,o,e,t],[t,t,e,e,e,e,e,e,e,t],[e,t,e,t,e,t,t,e,e,t],[e,t,e,e,e,t,t,t,t,t],[e,t,t,t,t,t]],[[e,t,t,t,t,t,t,t],[e,t,e,e,i,e,i,t,t,t],[e,t,e,i,e,i,e,i,e,t],[t,t,t,e,t,t,t,t,e,t],[t,e,e,n,o,e,e,o,e,t],[t,e,e,o,o,e,e,o,e,t],[t,t,t,t,e,e,e,t,t,t],[e,e,e,t,t,t,t,t]],[[e,e,e,e,e,e,e,e,t,t,t,t],[t,t,t,t,t,t,t,t,t,e,e,t],[t,e,e,e,t,t,e,o,e,e,e,t],[t,e,e,o,e,e,e,t,t,e,e,t],[t,t,t,e,t,i,e,i,t,e,t,t],[e,e,t,e,t,i,e,i,t,o,t,t],[e,e,t,e,t,e,e,e,t,e,e,t],[e,e,t,e,n,e,o,e,e,e,e,t],[e,e,t,e,e,t,t,t,t,t,t,t],[e,e,t,t,t,t]],[[t,t,t,t,t,t,t],[t,e,e,e,e,e,t,t,t,t,t],[t,e,o,o,t,n,t,t,i,i,t],[t,e,t,e,e,e,e,e,e,e,t],[t,e,e,o,e,t,e,t,e,e,t],[t,t,t,t,e,o,e,e,i,i,t],[e,e,e,t,t,t,t,t,t,t,t]],[[e,t,t,t,t,t,t,t],[e,t,e,e,e,e,e,t],[t,t,e,t,t,t,o,t,t],[t,i,o,e,e,e,n,e,t],[t,e,i,i,e,t,o,e,t],[t,i,t,t,e,e,o,e,t],[t,e,e,e,e,t,t,t,t],[t,t,t,t,t,t]],[[e,e,e,e,e,e,e,t,t,t,t],[e,e,e,e,e,e,t,t,e,e,t,t,t],[t,t,t,t,e,e,t,e,e,o,e,e,t],[t,e,e,t,t,t,t,e,o,e,o,e,t],[t,e,e,e,i,i,t,e,t,o,e,e,t],[t,e,e,t,e,e,e,n,e,e,t,t,t],[t,t,e,t,i,i,t,e,t,t,t],[e,t,e,t,t,e,t,e,t],[e,t,e,e,e,e,e,e,t],[e,t,t,t,t,t,t,t,t]],[[e,e,t,t,t,t],[t,t,t,e,e,t],[t,e,e,e,e,t,t,t],[t,e,t,e,i,e,i,t],[t,e,n,e,i,i,i,t,t,t,t],[t,e,t,e,t,e,t,e,e,e,t,t],[t,e,e,e,t,e,o,o,e,e,e,t],[t,t,t,t,t,e,e,o,e,o,e,t],[e,e,e,e,t,t,o,e,t,e,t,t],[e,e,e,e,e,t,e,e,e,e,t],[e,e,e,e,e,t,t,t,t,t,t]],[[e,t,t,t,t],[t,t,e,e,t,t,t,t],[t,e,e,e,i,i,i,t],[t,e,e,e,i,i,i,t],[t,e,e,e,t,e,t,t],[t,e,e,e,t,n,e,t,t,t,t,e,t,t,t,t],[t,t,t,t,t,e,o,e,e,e,t,t,t,e,e,t],[e,e,e,e,t,e,e,t,t,o,e,o,e,e,e,t],[e,e,e,t,t,t,e,e,e,e,e,o,o,e,e,t],[e,e,e,t,e,o,e,e,t,t,e,e,e,t,t,t],[e,e,e,t,e,e,e,e,t,t,t,t,t,t],[e,e,e,t,t,t,t,t,t]],[[t,t,t,t,t,t,t,t,e,t,t,t,t,t],[t,e,e,t,e,e,e,t,t,t,e,e,e,t],[t,e,e,e,e,e,e,t,t,e,o,e,e,t],[t,i,t,e,n,e,t,t,e,o,e,e,t,t],[t,i,t,e,e,e,t,e,o,e,e,t,t],[t,i,t,e,e,e,e,o,e,e,t,t],[t,i,e,t,t,e,t,t,t,t,t],[t,t,e,e,e,e,t],[e,t,t,t,t,t,t]],[[e,e,t,t,t,t,t,t,t,t],[e,e,t,e,e,t,e,i,e,t],[e,e,t,e,e,e,i,s,i,t],[e,e,t,e,e,t,e,s,e,t],[t,t,t,t,o,t,t,i,t,t],[t,e,e,e,e,e,e,o,e,t],[t,e,o,e,t,t,e,o,e,t],[t,e,e,e,n,t,e,e,e,t],[t,t,t,t,t,t,t,t,t,t]],[[e,e,t,t,t,t],[e,e,t,e,e,t],[e,e,t,e,e,t,t,t,t],[t,t,t,o,i,o,e,e,t],[t,e,e,i,n,i,e,e,t],[t,e,e,o,i,o,t,t,t],[t,t,t,t,e,e,t],[e,e,e,t,e,e,t],[e,e,e,t,t,t,t]],[[t,t,t,t],[t,e,e,t,t,t,t],[t,e,o,e,e,e,t],[t,e,i,t,e,e,t],[t,e,o,t,e,t,t],[t,e,i,e,e,t],[t,t,t,t,e,t],[e,e,e,t,e,t],[e,t,t,t,e,t,t,t],[e,t,e,e,o,e,e,t],[t,t,e,t,o,t,e,t,t],[t,e,o,e,n,e,o,e,t],[t,e,i,i,t,i,i,e,t],[t,t,t,e,e,e,t,t,t],[e,e,t,t,t,t,t]],[[e,e,e,t,t,t,t],[e,t,t,t,e,e,t,t,t,t,t],[e,t,e,o,o,e,t,e,e,e,t],[e,t,e,o,e,i,e,i,o,o,t,t],[e,t,e,i,i,e,t,i,e,o,e,t],[t,t,t,e,t,s,s,e,i,e,e,t],[t,e,e,i,e,s,s,t,e,t,t,t],[t,e,o,e,i,t,e,i,i,e,t],[t,t,o,o,i,n,i,e,o,e,t],[e,t,e,e,e,t,e,o,o,e,t],[e,t,t,t,t,t,e,e,t,t,t],[e,e,e,e,e,t,t,t,t]],[[e,e,e,t,t,t,t,t],[e,e,e,t,e,n,e,t],[e,e,t,t,e,e,e,t,t],[t,t,t,i,o,o,o,i,t,t,t],[t,e,e,o,i,i,i,o,e,e,t],[t,e,e,o,i,t,i,o,e,e,t],[t,e,e,o,i,i,i,o,e,e,t],[t,t,t,i,o,o,o,i,t,t,t],[e,e,t,t,e,e,e,t,t],[e,e,e,t,e,e,e,t],[e,e,e,t,t,t,t,t]],[[e,t,t,t,t,t,t,t],[t,t,e,e,i,e,e,t,t],[t,e,i,o,o,o,i,e,t],[t,e,o,i,e,i,o,e,t],[t,i,o,e,n,e,o,i,t],[t,e,o,i,e,i,o,e,t],[t,e,i,o,o,o,i,e,t],[t,t,e,e,i,e,e,t,t],[e,t,t,t,t,t,t,t]],[[e,e,e,e,e,e,e,t,t,t,t,t],[t,t,t,t,t,t,t,t,e,e,e,t],[t,i,e,e,e,i,e,e,n,t,i,t],[t,e,e,t,t,t,e,e,e,e,e,t],[t,t,e,o,e,e,t,e,e,e,e,t],[e,t,e,o,e,e,e,t,t,t,t,t],[e,t,e,o,t,e,e,t],[e,t,t,e,t,e,e,t],[e,e,t,e,e,e,t,t],[e,e,t,t,t,t,t]],[[t,t,t,t,t,t,t,t,t,t,t],[t,e,e,i,e,e,t,e,e,e,t],[t,e,t,i,e,e,n,e,e,e,t],[t,e,e,t,i,i,t,e,t,t,t,t,t,t,t],[t,t,e,e,t,t,e,o,o,e,o,e,o,e,t],[e,t,t,e,e,e,e,e,e,e,e,e,e,e,t],[e,e,t,t,t,t,t,t,t,t,t,t,t,t,t]],[[e,t,t,t,t],[t,t,e,e,t,t,t],[t,n,o,e,e,e,t],[t,t,t,e,o,e,t],[e,t,e,e,t,t,t,t,t,t],[e,t,e,e,o,i,i,i,i,t],[e,t,e,e,t,e,t,t,t,t],[e,t,t,e,t,e,t],[e,t,e,o,t,e,t],[e,t,e,e,e,e,t],[e,t,e,e,t,t,t],[e,t,t,t,t]],[[e,e,e,e,e,t,t,t,t],[e,t,t,t,t,t,e,e,t],[e,t,e,e,e,e,e,o,t,t,t,t,t,t,t],[t,t,e,t,t,e,i,i,t,e,e,i,i,i,t],[t,e,o,e,o,o,t,o,e,e,n,e,e,e,t],[t,e,e,e,e,e,e,e,e,t,t,t,e,e,t],[t,t,t,t,t,t,t,e,e,t,e,t,t,t,t],[e,e,e,e,e,e,t,t,t,t]],[[e,e,e,t,t,t,t],[e,e,e,t,e,e,t],[e,t,t,t,e,e,t],[t,t,e,e,o,e,t],[t,e,e,e,t,e,t],[t,e,t,o,o,e,t,t,t,t,t,t],[t,e,t,e,e,e,t,e,e,e,i,t],[t,e,e,o,e,e,n,e,e,e,i,t],[t,t,t,e,e,t,t,t,t,i,i,t],[e,e,t,t,t,t,e,e,t,t,t,t]],[[t,t,t,t,t,t,e,t,t,t,t],[t,e,e,e,e,e,t,e,e,e,e,t],[t,i,t,t,e,e,t,o,t,t,e,e,t],[t,e,e,e,t,e,e,e,e,e,t,e,e,t],[t,o,e,e,t,e,t,t,t,e,e,t,e,e,t],[t,e,t,e,e,e,e,e,e,t,e,e,t,e,t],[t,e,t,e,t,t,t,t,e,e,t,e,t,e,t],[t,i,e,n,e,e,e,e,o,e,s,e,i,e,t],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t]],[[t,t,t,t,t,t,t,t,t,t,t,t,t],[t,i,t,e,n,t,e,e,t,e,e,e,t],[t,i,t,o,o,e,e,e,t,e,o,e,t],[t,i,t,e,e,t,e,o,t,e,e,e,t],[t,i,t,e,o,t,e,e,t,e,o,t,t],[t,i,t,e,e,t,e,o,t,e,e,t],[t,i,t,e,o,t,e,e,t,e,o,t],[t,i,i,e,e,t,e,o,e,e,e,t],[t,i,i,e,e,t,e,e,t,e,e,t],[t,t,t,t,t,t,t,t,t,t,t,t]],[[e,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],[e,t,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,t],[e,t,e,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,e,t],[e,t,e,t,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,t,e,t],[e,t,e,t,e,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,e,t,e,t],[e,t,e,t,e,t,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,t,e,t,e,t],[e,t,e,t,e,t,e,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,e,t,e,t,e,t],[e,t,e,t,e,t,e,t,e,e,e,e,e,e,e,e,e,e,e,e,e,e,t,e,t,e,t,e,t],[e,t,e,t,e,t,e,t,e,t,t,t,t,t,t,t,t,t,t,t,t,e,t,e,t,e,t,e,t],[e,t,e,t,e,t,e,t,e,t,e,e,e,e,e,e,e,e,e,e,e,e,t,e,t,e,t,e,t],[e,t,e,t,e,t,e,t,e,t,e,t,t,t,t,t,t,t,t,t,t,t,t,e,t,e,t,e,t],[e,t,e,t,e,t,e,t,e,t,e,e,e,e,e,e,e,e,e,e,e,e,e,e,t,e,t,e,t],[e,t,e,t,e,t,e,t,e,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,e,t,e,t],[e,t,e,t,e,t,e,t,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,t,e,t],[t,t,o,t,e,t,e,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,e,t],[t,i,e,n,e,t,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,t],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t]],[[e,e,e,e,t,t,t,t,t,t,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,t,t,t,t],[t,t,t,t,t,s,t,e,e,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,e,e,t,t],[t,e,e,e,t,t,t,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,t],[t,e,e,e,e,e,e,e,e,t,t,t,t,t,t,t,t,e,e,t,t,t,t,e,e,t,t,e,e,t],[t,t,t,e,t,t,t,t,e,e,e,e,e,t,e,e,t,t,t,t,e,e,t,t,t,t,e,e,t,t],[t,s,t,e,t,e,i,t,e,t,e,t,e,t,e,e,e,e,e,t,e,e,e,e,e,t,e,e,e,t],[t,s,t,e,t,e,e,t,e,e,e,e,e,t,e,t,t,e,e,t,e,t,t,e,e,t,t,e,e,t],[t,t,t,e,e,e,e,t,t,t,e,t,t,t,e,e,t,e,t,t,e,e,t,e,t,t,e,e,t,t],[e,t,e,e,e,t,e,t,s,t,e,e,e,e,e,e,t,e,e,e,e,e,t,e,t,e,e,e,e,t],[e,t,e,e,e,t,e,t,t,t,e,e,t,t,t,t,t,e,e,t,t,t,t,e,t,e,e,e,e,t],[e,t,t,t,t,t,e,e,e,t,t,t,t,t,e,e,t,t,t,t,t,t,t,e,t,t,t,t,t,t],[e,t,e,e,e,t,e,t,e,t,s,s,t,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,t],[t,t,e,t,e,t,e,e,e,t,s,s,t,e,e,t,t,t,t,t,t,t,e,e,t,t,e,e,t],[t,e,e,e,e,t,t,t,t,t,t,t,t,t,e,e,t,e,e,e,e,t,t,t,t,t,e,t,t,t],[t,e,t,e,e,e,e,e,e,e,e,e,e,e,e,e,t,e,o,e,e,e,e,e,e,e,e,t,s,t],[t,e,e,e,t,t,t,t,t,t,t,t,t,e,e,t,t,t,e,n,t,t,t,t,t,e,e,t,s,t],[t,t,t,t,t,e,e,e,e,e,e,e,t,t,t,t,e,t,t,t,t,e,e,e,t,t,t,t,t,t]]];window.innerWidth<window.innerHeight&&(u=u.map((e=>{var o;return o=[],e.forEach((function(e,t,s){e.forEach((function(e,i,n){o[i]=o[i]||[],o[i][s.length-t-1]=e}))})),o=o.map((e=>Array.from(e,((o,s)=>s in e?e[s]:t))))})));const m=u.reduce(((e,t)=>{var o=Math.max(...t.map((e=>e.length)));return e.row<t.length&&(e.row=t.length),e.col<o&&(e.col=o),e}),{row:0,col:0}),g={height:21*m.row,width:21*m.col},v=e=>[o,s].includes(e),b=t=>[e,i].includes(t),f=e=>[i,s].includes(e),w=(e,t,o=1)=>"up"===t||"down"===t?e:"right"===t?e+o:"left"===t?e-o:void 0,x=(e,t,o=1)=>"left"===t||"right"===t?e:"down"===t?e+o:"up"===t?e-o:void 0;function p({level:e}){return JSON.parse(JSON.stringify(u[e]))}function y(e,t,o,s,i){return v(i[t][o])?y(++e,x(t,s),w(o,s),s,i):e}let S=21;const k=document.querySelector("#levelselector");var I=document.createElement("script");I.src="dist/WortalAd.js",I.type="text/javascript";const E=document.getElementsByTagName("head");0===["localhost"].filter((e=>window.location.href.includes(e))).length?E[E.length-1].appendChild(I):document.getElementById("black-cover").hidden=!0;const C=localStorage.getItem("dw-sokoban-currentlevel"),L=C?Number(C):0;let q;q=new class{constructor({level:e}){document.querySelector(".header").classList.remove("d-none"),this.canvas=document.querySelector("canvas"),this.canvas.width=g.width,this.canvas.height=g.height;const t=document.querySelector(".board").clientHeight+this.canvas.height-window.innerHeight,o=document.querySelector(".board").clientWidth+this.canvas.width-window.innerWidth;if(t>0&&window.innerHeight>window.innerWidth){const e=this.canvas.height;this.canvas.height=this.canvas.height-t-35,this.canvas.width=this.canvas.width*(this.canvas.height/e),g.height=Math.floor(g.height*(this.canvas.height/e)),g.width=Math.floor(g.width*(this.canvas.height/e)),S*=this.canvas.height/e}if(o>0&&window.innerHeight<window.innerWidth){const e=this.canvas.width;this.canvas.width=this.canvas.width-o-35,this.canvas.height=this.canvas.height*(this.canvas.width/e),g.height=Math.floor(g.height*(this.canvas.width/e)),g.width=Math.floor(g.width*(this.canvas.width/e)),S*=this.canvas.width/e}this.context=this.canvas.getContext("2d"),this.context.fillStyle=d.empty,this.context.fillRect(0,0,g.width,g.height),this.board=p({level:e}),this.boardIndex=e,this.level=u[e],this.steps=0;const s=u.length,i=localStorage.getItem("dw-sokoban-currentlevel")?Number(localStorage.getItem("dw-sokoban-currentlevel")):0;i>s&&localStorage.setItem("dw-sokoban-maxlevel",i),this.renderDropdown()}renderDropdown(){const e=u.length,t=document.querySelector("#levelselector");t.innerHTML="",u.slice(0,Number(e)+1).map(((e,o)=>{const s=document.createElement("option");s.value=o,s.innerText=o+1,t.appendChild(s),t.selectedIndex=localStorage.getItem("dw-sokoban-currentlevel")?Number(localStorage.getItem("dw-sokoban-currentlevel")):0}))}paintCell(e,t,o,s){const i=(n=this.board).reduce(((e,t)=>(e.col<t.length&&(e.col=t.length),e)),{row:n.length,col:0});var n;const l=Math.floor((m.row-i.row)/2);if(o+=Math.floor((m.col-i.col)/2),s+=l,"void"===t||"player"===t){const e="player"===t?S/3:S/5;this.context.beginPath(),this.context.rect(o*S+4,s*S+4,S,S),this.context.fillStyle=d.empty.fill,this.context.fill(),this.context.beginPath(),this.context.arc(o*S+3+S/2,s*S+3+S/2,e,0,2*Math.PI),this.context.lineWidth=S/10,this.context.strokeStyle=d[t].stroke,this.context.fillStyle=d[t].fill,this.context.fill(),this.context.stroke()}else this.context.beginPath(),this.context.rect(o*S+5,s*S+5,S-S/10,S-S/10),this.context.fillStyle=d[t].fill,this.context.fill(),this.context.beginPath(),this.context.rect(o*S+5,s*S+5,S-S/10,S-S/10),this.context.lineWidth=S/10,this.context.strokeStyle=d[t].stroke,this.context.stroke()}render(e={}){const t=localStorage.getItem("dw-sokoban-highscore")?JSON.parse(localStorage.getItem("dw-sokoban-highscore")):{},o=document.querySelector("#highscore #score"),s=document.createElement("table"),n=document.createElement("tr"),l=document.createElement("th"),r=document.createElement("th");l.innerText="Level",r.innerText="Score",n.appendChild(l),n.appendChild(r),s.appendChild(n),Object.keys(t).map((e=>{const o=document.createElement("tr"),i=document.createElement("td"),n=document.createElement("td");i.innerText=`${Number(e)+1}`,n.innerText=`${t[e]}`,o.appendChild(i),o.appendChild(n),s.appendChild(o)})),o.innerHTML=s.outerHTML,this.context=this.canvas.getContext("2d"),this.context.fillStyle="#202020",this.context.fillRect(0,0,g.width,g.height),e.restart&&(this.steps=0,this.board=p({level:this.boardIndex}),document.querySelector("#steps").innerHTML=`Steps: ${this.steps}`),void 0!==e.level&&(this.level=u[e.level],this.steps=0,document.querySelector("#steps").innerHTML=`Steps: ${this.steps}`,this.boardIndex=e.level,this.board=p({level:e.level})),this.board.forEach(((e,t)=>{e.forEach(((e,o)=>{this.paintCell(this.context,e,o,t)}))}));const a=this.board.filter((e=>e.some((e=>e===i))));f(this.board[this.findPlayerCoords().y][this.findPlayerCoords().x])&&a.push(this.board[this.findPlayerCoords().y]);const h=this.level.flatMap((e=>e)).filter((e=>"void"===e||"success_block"===e)),c=this.board.flatMap((e=>e)).filter((e=>"success_block"===e));0===a.length&&h.length===c.length&&(this.context.fillStyle="#111",this.context.fillRect(0,0,g.width,g.height),this.context.font="bold 30px sans-serif",this.context.textAlign="center",this.context.fillStyle=d.success_block.fill,this.context.fillText(`Complete with ${this.steps} steps!`,this.canvas.width/2,this.canvas.height/2),setTimeout((()=>{localStorage.setItem("dw-sokoban-highscore",t?JSON.stringify({...t,[this.boardIndex]:null==t[this.boardIndex]||t[this.boardIndex]>this.steps?this.steps:t[this.boardIndex]}):JSON.stringify({[this.boardIndex]:this.steps})),this.boardIndex++,Number(localStorage.getItem("dw-sokoban-maxlevel"))<=this.boardIndex&&localStorage.setItem("dw-sokoban-maxlevel",this.boardIndex),this.level=u[this.boardIndex],this.renderDropdown(),document.querySelector("#levelselector").selectedIndex=this.boardIndex,localStorage.setItem("dw-sokoban-currentlevel",this.boardIndex),0===["localhost","t.tmy.io"].filter((e=>window.location.href.includes(e))).lenght&&CallAd(AdTypes.next,"Win level"),this.render({level:this.boardIndex})}),1e3))}findPlayerCoords(){const e=this.board.findIndex((e=>e.includes(n))),t=this.board[e].indexOf(n);return{x:t,y:e,above:this.board[e-1][t],below:this.board[e+1][t],sideLeft:this.board[e][t-1],sideRight:this.board[e][t+1]}}movePlayer(t,o){this.board[t.y][t.x]=f(this.level[t.y][t.x])?i:e,this.board[x(t.y,o,1)][w(t.x,o,1)]=n,this.steps++,document.querySelector("#steps").innerHTML=`Steps: ${this.steps}`}movePlayerAndBoxes(e,i){const n=x(e.y,i,1),l=w(e.x,i,1),r=x(e.y,i,2),a=w(e.x,i,2);if(h=this.board[r][a],[t].includes(h))return;var h;let c=0;if(v(this.board[r][a])){c=y(1,r,a,i,this.board);const t=this.board[x(n,i,c)][w(l,i,c)];if(b(t)){for(let e=0;e<c;e++)this.board[x(r,i,e)][w(a,i,e)]=f(this.board[x(r,i,e)][w(a,i,e)])?s:o;this.movePlayer(e,i)}}else this.board[r][a]=f(this.board[r][a])?s:o,this.movePlayer(e,i)}move(e,t){const{x:o,y:s,above:i,below:n,sideLeft:c,sideRight:d}=e,u={[l]:i,[r]:n,[a]:c,[h]:d};b(u[t])&&this.movePlayer(e,t),v(u[t])&&this.movePlayerAndBoxes(e,t)}}({level:L}),q.render();const A=e=>{const t=q.findPlayerCoords();switch(e.key){case c.up:case c.w:q.move(t,l);break;case c.down:case c.s:q.move(t,r);break;case c.left:case c.a:q.move(t,a);break;case c.right:case c.d:q.move(t,h)}q.render()};Array.from(document.querySelectorAll(".menubutton")).map((e=>e.addEventListener("click",(e=>{document.querySelector(".header").classList.toggle("menutoggled")})))),Array.from(document.querySelectorAll(".directionbutton")).map((e=>{e.addEventListener("click",(e=>{e.key=e.target.dataset.key,A(e)}))})),document.addEventListener("keydown",(e=>A(e))),document.querySelector("button#restartbutton").addEventListener("click",(e=>{k.value=L,q.render({restart:!0})})),Array.from(document.querySelectorAll("button.highscorebutton")).map((e=>{e.addEventListener("click",(e=>{document.querySelector("#highscore").classList.toggle("d-none")}))})),k.addEventListener("change",(e=>{localStorage.setItem("dw-sokoban-currentlevel",e.target.value),q.render({level:Number(e.target.value)}),document.querySelector(".header").classList.remove("menutoggled"),e.target.blur()}))})();