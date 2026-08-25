(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const ff="179",Qm=0,Zf=1,e_=2,zd=1,t_=2,Di=3,pr=0,En=1,Ii=2,cr=0,Bs=1,$c=2,jf=3,Jf=4,n_=5,zr=100,i_=101,r_=102,s_=103,o_=104,a_=200,l_=201,c_=202,u_=203,Kc=204,Zc=205,f_=206,h_=207,d_=208,p_=209,m_=210,__=211,g_=212,v_=213,x_=214,jc=0,Jc=1,Qc=2,Ks=3,eu=4,tu=5,nu=6,iu=7,kd=0,S_=1,M_=2,ur=0,y_=1,E_=2,T_=3,b_=4,A_=5,w_=6,R_=7,Hd=300,Zs=301,js=302,ru=303,su=304,Fl=306,ou=1e3,Hr=1001,au=1002,fi=1003,C_=1004,da=1005,vi=1006,Yl=1007,Vr=1008,Vi=1009,Vd=1010,Gd=1011,qo=1012,hf=1013,ts=1014,Fi=1015,oa=1016,df=1017,pf=1018,Yo=1020,Wd=35902,Xd=1021,qd=1022,ui=1023,$o=1026,Ko=1027,Yd=1028,mf=1029,$d=1030,_f=1031,gf=1033,el=33776,tl=33777,nl=33778,il=33779,lu=35840,cu=35841,uu=35842,fu=35843,hu=36196,du=37492,pu=37496,mu=37808,_u=37809,gu=37810,vu=37811,xu=37812,Su=37813,Mu=37814,yu=37815,Eu=37816,Tu=37817,bu=37818,Au=37819,wu=37820,Ru=37821,rl=36492,Cu=36494,Pu=36495,Kd=36283,Du=36284,Lu=36285,Uu=36286,P_=3200,D_=3201,L_=0,U_=1,tr="",Jn="srgb",Js="srgb-linear",gl="linear",gt="srgb",us=7680,Qf=519,I_=512,N_=513,F_=514,Zd=515,O_=516,B_=517,z_=518,k_=519,eh=35044,th="300 es",xi=2e3,vl=2001;class ao{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$l=Math.PI/180,Iu=180/Math.PI;function aa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[r&255]+nn[r>>8&255]+nn[r>>16&255]+nn[r>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function H_(r,e){return(r%e+e)%e}function Kl(r,e,t){return(1-t)*r+t*e}function uo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Sn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class la{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=s[o+0],h=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==d||c!==h||u!==_){let m=1-a;const p=l*d+c*h+u*_+f*g,b=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const A=Math.sqrt(E),R=Math.atan2(A,p*b);m=Math.sin(m*R)/A,a=Math.sin(a*R)/A}const v=a*b;if(l=l*m+d*v,c=c*m+h*v,u=u*m+_*v,f=f*m+g*v,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],d=s[o+1],h=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*h-c*d,e[t+1]=l*_+u*d+c*f-a*h,e[t+2]=c*_+u*h+a*d-l*f,e[t+3]=u*_-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),d=l(n/2),h=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"YZX":this._x=d*u*f+c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f-d*h*_;break;case"XZY":this._x=d*u*f-c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f+d*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-i)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(s-c)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zl.copy(this).projectOnVector(e),this.sub(Zl)}reflect(e){return this.sub(Zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zl=new q,nh=new la;class Ze{constructor(e,t,n,i,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],_=n[8],g=i[0],m=i[3],p=i[6],b=i[1],E=i[4],v=i[7],A=i[2],R=i[5],T=i[8];return s[0]=o*g+a*b+l*A,s[3]=o*m+a*E+l*R,s[6]=o*p+a*v+l*T,s[1]=c*g+u*b+f*A,s[4]=c*m+u*E+f*R,s[7]=c*p+u*v+f*T,s[2]=d*g+h*b+_*A,s[5]=d*m+h*E+_*R,s[8]=d*p+h*v+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,_=t*f+n*d+i*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=h*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jl.makeScale(e,t)),this}rotate(e){return this.premultiply(jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jl=new Ze;function jd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function xl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function V_(){const r=xl("canvas");return r.style.display="block",r}const ih={};function zs(r){r in ih||(ih[r]=!0,console.warn(r))}function G_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const rh=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W_(){const r={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(i.r=ks(i.r),i.g=ks(i.g),i.b=ks(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===tr?gl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Js]:{primaries:e,whitePoint:n,transfer:gl,toXYZ:rh,fromXYZ:sh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:rh,fromXYZ:sh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),r}const ft=W_();function ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ks(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let fs;class X_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fs===void 0&&(fs=xl("canvas")),fs.width=e.width,fs.height=e.height;const i=fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ki(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let q_=0;class vf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=aa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Jl(i[o].image)):s.push(Jl(i[o]))}else s=Jl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Jl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?X_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Y_=0;const Ql=new q;class Tn extends ao{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,n=Hr,i=Hr,s=vi,o=Vr,a=ui,l=Vi,c=Tn.DEFAULT_ANISOTROPY,u=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=aa(),this.name="",this.source=new vf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ou:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case au:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ou:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case au:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Hd;Tn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,i=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,v=(h+1)/2,A=(p+1)/2,R=(u+d)/4,T=(f+g)/4,D=(_+m)/4;return E>v&&E>A?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=R/n,s=T/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=R/i,s=D/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=T/s,i=D/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-g)/b,this.z=(d-u)/b,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $_ extends ao{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Tn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:vi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new vf(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends $_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jd extends Tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fi,this.minFilter=fi,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class K_ extends Tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fi,this.minFilter=fi,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ca{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),ma.subVectors(this.max,fo),hs.subVectors(e.a,fo),ds.subVectors(e.b,fo),ps.subVectors(e.c,fo),$i.subVectors(ds,hs),Ki.subVectors(ps,ds),Er.subVectors(hs,ps);let t=[0,-$i.z,$i.y,0,-Ki.z,Ki.y,0,-Er.z,Er.y,$i.z,0,-$i.x,Ki.z,0,-Ki.x,Er.z,0,-Er.x,-$i.y,$i.x,0,-Ki.y,Ki.x,0,-Er.y,Er.x,0];return!ec(t,hs,ds,ps,ma)||(t=[1,0,0,0,1,0,0,0,1],!ec(t,hs,ds,ps,ma))?!1:(_a.crossVectors($i,Ki),t=[_a.x,_a.y,_a.z],ec(t,hs,ds,ps,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ti=[new q,new q,new q,new q,new q,new q,new q,new q],si=new q,pa=new ca,hs=new q,ds=new q,ps=new q,$i=new q,Ki=new q,Er=new q,fo=new q,ma=new q,_a=new q,Tr=new q;function ec(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Tr.fromArray(r,s);const a=i.x*Math.abs(Tr.x)+i.y*Math.abs(Tr.y)+i.z*Math.abs(Tr.z),l=e.dot(Tr),c=t.dot(Tr),u=n.dot(Tr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Z_=new ca,ho=new q,tc=new q;class Ol{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Z_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);const t=ho.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ho,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(tc)),this.expandByPoint(ho.copy(e.center).sub(tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const bi=new q,nc=new q,ga=new q,Zi=new q,ic=new q,va=new q,rc=new q;class Qd{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){nc.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(nc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ga),a=Zi.dot(this.direction),l=-Zi.dot(ga),c=Zi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,_;if(u>0)if(f=o*l-a,d=o*a-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(nc).addScaledVector(ga,d),h}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const n=bi.dot(this.direction),i=bi.dot(bi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,i,s){ic.subVectors(t,e),va.subVectors(n,e),rc.crossVectors(ic,va);let o=this.direction.dot(rc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,e);const l=a*this.direction.dot(va.crossVectors(Zi,va));if(l<0)return null;const c=a*this.direction.dot(ic.cross(Zi));if(c<0||l+c>o)return null;const u=-a*Zi.dot(rc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,n,i,s,o,a,l,c,u,f,d,h,_,g,m){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,d,h,_,g,m)}set(e,t,n,i,s,o,a,l,c,u,f,d,h,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ms.setFromMatrixColumn(e,0).length(),s=1/ms.setFromMatrixColumn(e,1).length(),o=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,_=c*u,g=c*f;t[0]=d+g*a,t[4]=_*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,_=c*u,g=c*f;t[0]=d-g*a,t[4]=-o*f,t[8]=_+h*a,t[1]=h+_*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=_*c-h,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=h*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-d*f,t[8]=_*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+_,t[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,h=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=o*u,t[9]=h*f-_,t[2]=_*f-h,t[6]=a*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j_,e,J_)}lookAt(e,t,n){const i=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),ji.crossVectors(n,In),ji.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),ji.crossVectors(n,In)),ji.normalize(),xa.crossVectors(In,ji),i[0]=ji.x,i[4]=xa.x,i[8]=In.x,i[1]=ji.y,i[5]=xa.y,i[9]=In.y,i[2]=ji.z,i[6]=xa.z,i[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],_=n[2],g=n[6],m=n[10],p=n[14],b=n[3],E=n[7],v=n[11],A=n[15],R=i[0],T=i[4],D=i[8],M=i[12],x=i[1],C=i[5],O=i[9],k=i[13],H=i[2],Y=i[6],X=i[10],G=i[14],z=i[3],ne=i[7],L=i[11],fe=i[15];return s[0]=o*R+a*x+l*H+c*z,s[4]=o*T+a*C+l*Y+c*ne,s[8]=o*D+a*O+l*X+c*L,s[12]=o*M+a*k+l*G+c*fe,s[1]=u*R+f*x+d*H+h*z,s[5]=u*T+f*C+d*Y+h*ne,s[9]=u*D+f*O+d*X+h*L,s[13]=u*M+f*k+d*G+h*fe,s[2]=_*R+g*x+m*H+p*z,s[6]=_*T+g*C+m*Y+p*ne,s[10]=_*D+g*O+m*X+p*L,s[14]=_*M+g*k+m*G+p*fe,s[3]=b*R+E*x+v*H+A*z,s[7]=b*T+E*C+v*Y+A*ne,s[11]=b*D+E*O+v*X+A*L,s[15]=b*M+E*k+v*G+A*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*f-i*c*f-s*a*d+n*c*d+i*a*h-n*l*h)+g*(+t*l*h-t*c*d+s*o*d-i*o*h+i*c*u-s*l*u)+m*(+t*c*f-t*a*h-s*o*f+n*o*h+s*a*u-n*c*u)+p*(-i*a*u-t*l*f+t*a*d+i*o*f-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],_=e[12],g=e[13],m=e[14],p=e[15],b=f*m*c-g*d*c+g*l*h-a*m*h-f*l*p+a*d*p,E=_*d*c-u*m*c-_*l*h+o*m*h+u*l*p-o*d*p,v=u*g*c-_*f*c+_*a*h-o*g*h-u*a*p+o*f*p,A=_*f*l-u*g*l-_*a*d+o*g*d+u*a*m-o*f*m,R=t*b+n*E+i*v+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=b*T,e[1]=(g*d*s-f*m*s-g*i*h+n*m*h+f*i*p-n*d*p)*T,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(f*l*s-a*d*s-f*i*c+n*d*c+a*i*h-n*l*h)*T,e[4]=E*T,e[5]=(u*m*s-_*d*s+_*i*h-t*m*h-u*i*p+t*d*p)*T,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*p-t*l*p)*T,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*h+t*l*h)*T,e[8]=v*T,e[9]=(_*f*s-u*g*s-_*n*h+t*g*h+u*n*p-t*f*p)*T,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*p+t*a*p)*T,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*h-t*a*h)*T,e[12]=A*T,e[13]=(u*g*i-_*f*i+_*n*d-t*g*d-u*n*m+t*f*m)*T,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*T,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,_=s*f,g=o*u,m=o*f,p=a*f,b=l*c,E=l*u,v=l*f,A=n.x,R=n.y,T=n.z;return i[0]=(1-(g+p))*A,i[1]=(h+v)*A,i[2]=(_-E)*A,i[3]=0,i[4]=(h-v)*R,i[5]=(1-(d+p))*R,i[6]=(m+b)*R,i[7]=0,i[8]=(_+E)*T,i[9]=(m-b)*T,i[10]=(1-(d+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ms.set(i[0],i[1],i[2]).length();const o=ms.set(i[4],i[5],i[6]).length(),a=ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],oi.copy(this);const c=1/s,u=1/o,f=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,t.setFromRotationMatrix(oi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=xi,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let _,g;if(l)_=s/(o-s),g=o*s/(o-s);else if(a===xi)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===vl)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=xi,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),h=-(n+i)/(n-i);let _,g;if(l)_=1/(o-s),g=o/(o-s);else if(a===xi)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===vl)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ms=new q,oi=new Wt,j_=new q(0,0,0),J_=new q(1,1,1),ji=new q,xa=new q,In=new q,oh=new Wt,ah=new la;class Gi{constructor(e=0,t=0,n=0,i=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class ep{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Q_=0;const lh=new q,_s=new la,Ai=new Wt,Sa=new q,po=new q,eg=new q,tg=new la,ch=new q(1,0,0),uh=new q(0,1,0),fh=new q(0,0,1),hh={type:"added"},ng={type:"removed"},gs={type:"childadded",child:null},sc={type:"childremoved",child:null};class bn extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new q,t=new Gi,n=new la,i=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Ze}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(uh,e)}rotateZ(e){return this.rotateOnAxis(fh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(uh,e)}translateZ(e){return this.translateOnAxis(fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sa.copy(e):Sa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(po,Sa,this.up):Ai.lookAt(Sa,po,this.up),this.quaternion.setFromRotationMatrix(Ai),i&&(Ai.extractRotation(i.matrixWorld),_s.setFromRotationMatrix(Ai),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hh),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ng),sc.child=e,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hh),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,eg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bn.DEFAULT_UP=new q(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new q,wi=new q,oc=new q,Ri=new q,vs=new q,xs=new q,dh=new q,ac=new q,lc=new q,cc=new q,uc=new Bt,fc=new Bt,hc=new Bt;class ci{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ai.subVectors(e,t),i.cross(ai);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ai.subVectors(i,t),wi.subVectors(n,t),oc.subVectors(e,t);const o=ai.dot(ai),a=ai.dot(wi),l=ai.dot(oc),c=wi.dot(wi),u=wi.dot(oc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-h-_,_,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return uc.setScalar(0),fc.setScalar(0),hc.setScalar(0),uc.fromBufferAttribute(e,t),fc.fromBufferAttribute(e,n),hc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(uc,s.x),o.addScaledVector(fc,s.y),o.addScaledVector(hc,s.z),o}static isFrontFacing(e,t,n,i){return ai.subVectors(n,t),wi.subVectors(e,t),ai.cross(wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),ai.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;vs.subVectors(i,n),xs.subVectors(s,n),ac.subVectors(e,n);const l=vs.dot(ac),c=xs.dot(ac);if(l<=0&&c<=0)return t.copy(n);lc.subVectors(e,i);const u=vs.dot(lc),f=xs.dot(lc);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(vs,o);cc.subVectors(e,s);const h=vs.dot(cc),_=xs.dot(cc);if(_>=0&&h<=_)return t.copy(s);const g=h*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(xs,a);const m=u*_-h*f;if(m<=0&&f-u>=0&&h-_>=0)return dh.subVectors(s,i),a=(f-u)/(f-u+(h-_)),t.copy(i).addScaledVector(dh,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(vs,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function dc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class _t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=H_(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=dc(o,s,e+1/3),this.g=dc(o,s,e),this.b=dc(o,s,e-1/3)}return ft.colorSpaceToWorking(this,i),this}setStyle(e,t=Jn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jn){const n=tp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return ft.workingToColorSpace(rn.copy(this),e),Math.round(at(rn.r*255,0,255))*65536+Math.round(at(rn.g*255,0,255))*256+Math.round(at(rn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(rn.copy(this),t);const n=rn.r,i=rn.g,s=rn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Jn){ft.workingToColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,i=rn.b;return e!==Jn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(Ma);const n=Kl(Ji.h,Ma.h,t),i=Kl(Ji.s,Ma.s,t),s=Kl(Ji.l,Ma.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new _t;_t.NAMES=tp;let ig=0;class ua extends ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=aa(),this.name="",this.type="Material",this.blending=Bs,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Zc,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==pr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kc&&(n.blendSrc=this.blendSrc),this.blendDst!==Zc&&(n.blendDst=this.blendDst),this.blendEquation!==zr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class np extends ua{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new q,ya=new vt;let rg=0;class hi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=eh,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=uo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=uo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=uo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=uo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=uo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),i=Sn(i,this.array),s=Sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eh&&(e.usage=this.usage),e}}class ip extends hi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rp extends hi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xr extends hi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sg=0;const Zn=new Wt,pc=new bn,Ss=new q,Nn=new ca,mo=new ca,Zt=new q;class qi extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jd(e)?rp:ip)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return pc.lookAt(e),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xr(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ol);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];mo.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Nn.min,mo.min),Nn.expandByPoint(Zt),Zt.addVectors(Nn.max,mo.max),Nn.expandByPoint(Zt)):(Nn.expandByPoint(mo.min),Nn.expandByPoint(mo.max))}Nn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Zt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Zt.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),Zt.add(Ss)),i=Math.max(i,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new q,l[D]=new q;const c=new q,u=new q,f=new q,d=new vt,h=new vt,_=new vt,g=new q,m=new q;function p(D,M,x){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,x),d.fromBufferAttribute(s,D),h.fromBufferAttribute(s,M),_.fromBufferAttribute(s,x),u.sub(c),f.sub(c),h.sub(d),_.sub(d);const C=1/(h.x*_.y-_.x*h.y);isFinite(C)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(C),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(C),a[D].add(g),a[M].add(g),a[x].add(g),l[D].add(m),l[M].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,M=b.length;D<M;++D){const x=b[D],C=x.start,O=x.count;for(let k=C,H=C+O;k<H;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const E=new q,v=new q,A=new q,R=new q;function T(D){A.fromBufferAttribute(i,D),R.copy(A);const M=a[D];E.copy(M),E.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(R,M);const C=v.dot(l[D])<0?-1:1;o.setXYZW(D,E.x,E.y,E.z,C)}for(let D=0,M=b.length;D<M;++D){const x=b[D],C=x.start,O=x.count;for(let k=C,H=C+O;k<H;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const i=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?h=l[g]*a.data.stride+a.offset:h=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[h++]}return new hi(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ph=new Wt,br=new Qd,Ea=new Ol,mh=new q,Ta=new q,ba=new q,Aa=new q,mc=new q,wa=new q,_h=new q,Ra=new q;class Oi extends bn{constructor(e=new qi,t=new np){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){wa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(mc.fromBufferAttribute(f,e),o?wa.addScaledVector(mc,u):wa.addScaledVector(mc.sub(t),u))}t.add(wa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(Ea.containsPoint(br.origin)===!1&&(br.intersectSphere(Ea,mh)===null||br.origin.distanceToSquared(mh)>(e.far-e.near)**2))&&(ph.copy(s).invert(),br.copy(e.ray).applyMatrix4(ph),!(n.boundingBox!==null&&br.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],b=Math.max(m.start,h.start),E=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let v=b,A=E;v<A;v+=3){const R=a.getX(v),T=a.getX(v+1),D=a.getX(v+2);i=Ca(this,p,e,n,c,u,f,R,T,D),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let m=_,p=g;m<p;m+=3){const b=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);i=Ca(this,o,e,n,c,u,f,b,E,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],b=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let v=b,A=E;v<A;v+=3){const R=v,T=v+1,D=v+2;i=Ca(this,p,e,n,c,u,f,R,T,D),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=_,p=g;m<p;m+=3){const b=m,E=m+1,v=m+2;i=Ca(this,o,e,n,c,u,f,b,E,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function og(r,e,t,n,i,s,o,a){let l;if(e.side===En?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===pr,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ra);return c<t.near||c>t.far?null:{distance:c,point:Ra.clone(),object:r}}function Ca(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ta),r.getVertexPosition(l,ba),r.getVertexPosition(c,Aa);const u=og(r,e,t,n,Ta,ba,Aa,_h);if(u){const f=new q;ci.getBarycoord(_h,Ta,ba,Aa,f),i&&(u.uv=ci.getInterpolatedAttribute(i,a,l,c,f,new vt)),s&&(u.uv1=ci.getInterpolatedAttribute(s,a,l,c,f,new vt)),o&&(u.normal=ci.getInterpolatedAttribute(o,a,l,c,f,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new q,materialIndex:0};ci.getNormal(Ta,ba,Aa,d.normal),u.face=d,u.barycoord=f}return u}class fa extends qi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xr(c,3)),this.setAttribute("normal",new Xr(u,3)),this.setAttribute("uv",new Xr(f,2));function _(g,m,p,b,E,v,A,R,T,D,M){const x=v/T,C=A/D,O=v/2,k=A/2,H=R/2,Y=T+1,X=D+1;let G=0,z=0;const ne=new q;for(let L=0;L<X;L++){const fe=L*C-k;for(let Le=0;Le<Y;Le++){const ot=Le*x-O;ne[g]=ot*b,ne[m]=fe*E,ne[p]=H,c.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[p]=R>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(Le/T),f.push(1-L/D),G+=1}}for(let L=0;L<D;L++)for(let fe=0;fe<T;fe++){const Le=d+fe+Y*L,ot=d+fe+Y*(L+1),ke=d+(fe+1)+Y*(L+1),$=d+(fe+1)+Y*L;l.push(Le,ot,$),l.push(ot,ke,$),z+=6}a.addGroup(h,z,M),h+=z,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pn(r){const e={};for(let t=0;t<r.length;t++){const n=Qs(r[t]);for(const i in n)e[i]=n[i]}return e}function ag(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function sp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const lg={clone:Qs,merge:pn};var cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mr extends ua{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cg,this.fragmentShader=ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=ag(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class op extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new q,gh=new vt,vh=new vt;class Qn extends op{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Iu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($l*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Iu*2*Math.atan(Math.tan($l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,gh,vh),t.subVectors(vh,gh)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($l*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ms=-90,ys=1;class fg extends bn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qn(Ms,ys,e,t);i.layers=this.layers,this.add(i);const s=new Qn(Ms,ys,e,t);s.layers=this.layers,this.add(s);const o=new Qn(Ms,ys,e,t);o.layers=this.layers,this.add(o);const a=new Qn(Ms,ys,e,t);a.layers=this.layers,this.add(a);const l=new Qn(Ms,ys,e,t);l.layers=this.layers,this.add(l);const c=new Qn(Ms,ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ap extends Tn{constructor(e=[],t=Zs,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hg extends ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ap(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new fa(5,5,5),s=new mr({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:cr});s.uniforms.tEquirect.value=t;const o=new Oi(i,s),a=t.minFilter;return t.minFilter===Vr&&(t.minFilter=vi),new fg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Pa extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dg={type:"move"};class _c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;c.inputState.pinching&&d>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class pg extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gc=new q,mg=new q,_g=new Ze;class Lr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=gc.subVectors(n,t).cross(mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(gc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_g.getNormalMatrix(e),i=this.coplanarPoint(gc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new Ol,gg=new vt(.5,.5),Da=new q;class lp{constructor(e=new Lr,t=new Lr,n=new Lr,i=new Lr,s=new Lr,o=new Lr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],_=s[8],g=s[9],m=s[10],p=s[11],b=s[12],E=s[13],v=s[14],A=s[15];if(i[0].setComponents(c-o,h-u,p-_,A-b).normalize(),i[1].setComponents(c+o,h+u,p+_,A+b).normalize(),i[2].setComponents(c+a,h+f,p+g,A+E).normalize(),i[3].setComponents(c-a,h-f,p-g,A-E).normalize(),n)i[4].setComponents(l,d,m,v).normalize(),i[5].setComponents(c-l,h-d,p-m,A-v).normalize();else if(i[4].setComponents(c-l,h-d,p-m,A-v).normalize(),t===xi)i[5].setComponents(c+l,h+d,p+m,A+v).normalize();else if(t===vl)i[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){Ar.center.set(0,0,0);const t=gg.distanceTo(e.center);return Ar.radius=.7071067811865476+t,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Da.x=i.normal.x>0?e.max.x:e.min.x,Da.y=i.normal.y>0?e.max.y:e.min.y,Da.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cp extends ua{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xh=new Wt,Nu=new Qd,La=new Ol,Ua=new q;class vg extends bn{constructor(e=new qi,t=new cp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(i),La.radius+=s,e.ray.intersectsSphere(La)===!1)return;xh.copy(i).invert(),Nu.copy(e.ray).applyMatrix4(xh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let _=d,g=h;_<g;_++){const m=c.getX(_);Ua.fromBufferAttribute(f,m),Sh(Ua,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let _=d,g=h;_<g;_++)Ua.fromBufferAttribute(f,_),Sh(Ua,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Sh(r,e,t,n,i,s,o){const a=Nu.distanceSqToPoint(r);if(a<t){const l=new q;Nu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class up extends Tn{constructor(e,t,n=ts,i,s,o,a=fi,l=fi,c,u=$o,f=1){if(u!==$o&&u!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bl extends qi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,d=t/l,h=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const b=p*d-o;for(let E=0;E<c;E++){const v=E*f-s;_.push(v,-b,0),g.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const E=b+c*p,v=b+c*(p+1),A=b+1+c*(p+1),R=b+1+c*p;h.push(E,v,R),h.push(v,A,R)}this.setIndex(h),this.setAttribute("position",new Xr(_,3)),this.setAttribute("normal",new Xr(g,3)),this.setAttribute("uv",new Xr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.widthSegments,e.heightSegments)}}class xg extends ua{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sg extends ua{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Mg extends op{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yg extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Eg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Mh(r,e,t,n){const i=Tg(n);switch(t){case Xd:return r*e;case Yd:return r*e/i.components*i.byteLength;case mf:return r*e/i.components*i.byteLength;case $d:return r*e*2/i.components*i.byteLength;case _f:return r*e*2/i.components*i.byteLength;case qd:return r*e*3/i.components*i.byteLength;case ui:return r*e*4/i.components*i.byteLength;case gf:return r*e*4/i.components*i.byteLength;case el:case tl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case nl:case il:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cu:case fu:return Math.max(r,16)*Math.max(e,8)/4;case lu:case uu:return Math.max(r,8)*Math.max(e,8)/2;case hu:case du:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _u:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case gu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case vu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Su:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case yu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Eu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case bu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Au:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case wu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case rl:case Cu:case Pu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Kd:case Du:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Lu:case Uu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tg(r){switch(r){case Vi:case Vd:return{byteLength:1,components:1};case qo:case Gd:case oa:return{byteLength:2,components:1};case df:case pf:return{byteLength:2,components:4};case ts:case hf:case Fi:return{byteLength:4,components:1};case Wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ff}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ff);function fp(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function bg(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((h,_)=>h.start-_.start);let d=0;for(let h=1;h<f.length;h++){const _=f[d],g=f[h];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,f[d]=g)}f.length=d+1;for(let h=0,_=f.length;h<_;h++){const g=f[h];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ig=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n0="gl_FragColor = linearToOutputTexel( gl_FragColor );",i0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,o0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,c0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,p0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,v0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,T0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,b0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,N0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,V0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,W0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,K0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ev=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ov=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,av=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Av=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Uv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Iv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$v=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ix=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Ag,alphahash_pars_fragment:wg,alphamap_fragment:Rg,alphamap_pars_fragment:Cg,alphatest_fragment:Pg,alphatest_pars_fragment:Dg,aomap_fragment:Lg,aomap_pars_fragment:Ug,batching_pars_vertex:Ig,batching_vertex:Ng,begin_vertex:Fg,beginnormal_vertex:Og,bsdfs:Bg,iridescence_fragment:zg,bumpmap_pars_fragment:kg,clipping_planes_fragment:Hg,clipping_planes_pars_fragment:Vg,clipping_planes_pars_vertex:Gg,clipping_planes_vertex:Wg,color_fragment:Xg,color_pars_fragment:qg,color_pars_vertex:Yg,color_vertex:$g,common:Kg,cube_uv_reflection_fragment:Zg,defaultnormal_vertex:jg,displacementmap_pars_vertex:Jg,displacementmap_vertex:Qg,emissivemap_fragment:e0,emissivemap_pars_fragment:t0,colorspace_fragment:n0,colorspace_pars_fragment:i0,envmap_fragment:r0,envmap_common_pars_fragment:s0,envmap_pars_fragment:o0,envmap_pars_vertex:a0,envmap_physical_pars_fragment:v0,envmap_vertex:l0,fog_vertex:c0,fog_pars_vertex:u0,fog_fragment:f0,fog_pars_fragment:h0,gradientmap_pars_fragment:d0,lightmap_pars_fragment:p0,lights_lambert_fragment:m0,lights_lambert_pars_fragment:_0,lights_pars_begin:g0,lights_toon_fragment:x0,lights_toon_pars_fragment:S0,lights_phong_fragment:M0,lights_phong_pars_fragment:y0,lights_physical_fragment:E0,lights_physical_pars_fragment:T0,lights_fragment_begin:b0,lights_fragment_maps:A0,lights_fragment_end:w0,logdepthbuf_fragment:R0,logdepthbuf_pars_fragment:C0,logdepthbuf_pars_vertex:P0,logdepthbuf_vertex:D0,map_fragment:L0,map_pars_fragment:U0,map_particle_fragment:I0,map_particle_pars_fragment:N0,metalnessmap_fragment:F0,metalnessmap_pars_fragment:O0,morphinstance_vertex:B0,morphcolor_vertex:z0,morphnormal_vertex:k0,morphtarget_pars_vertex:H0,morphtarget_vertex:V0,normal_fragment_begin:G0,normal_fragment_maps:W0,normal_pars_fragment:X0,normal_pars_vertex:q0,normal_vertex:Y0,normalmap_pars_fragment:$0,clearcoat_normal_fragment_begin:K0,clearcoat_normal_fragment_maps:Z0,clearcoat_pars_fragment:j0,iridescence_pars_fragment:J0,opaque_fragment:Q0,packing:ev,premultiplied_alpha_fragment:tv,project_vertex:nv,dithering_fragment:iv,dithering_pars_fragment:rv,roughnessmap_fragment:sv,roughnessmap_pars_fragment:ov,shadowmap_pars_fragment:av,shadowmap_pars_vertex:lv,shadowmap_vertex:cv,shadowmask_pars_fragment:uv,skinbase_vertex:fv,skinning_pars_vertex:hv,skinning_vertex:dv,skinnormal_vertex:pv,specularmap_fragment:mv,specularmap_pars_fragment:_v,tonemapping_fragment:gv,tonemapping_pars_fragment:vv,transmission_fragment:xv,transmission_pars_fragment:Sv,uv_pars_fragment:Mv,uv_pars_vertex:yv,uv_vertex:Ev,worldpos_vertex:Tv,background_vert:bv,background_frag:Av,backgroundCube_vert:wv,backgroundCube_frag:Rv,cube_vert:Cv,cube_frag:Pv,depth_vert:Dv,depth_frag:Lv,distanceRGBA_vert:Uv,distanceRGBA_frag:Iv,equirect_vert:Nv,equirect_frag:Fv,linedashed_vert:Ov,linedashed_frag:Bv,meshbasic_vert:zv,meshbasic_frag:kv,meshlambert_vert:Hv,meshlambert_frag:Vv,meshmatcap_vert:Gv,meshmatcap_frag:Wv,meshnormal_vert:Xv,meshnormal_frag:qv,meshphong_vert:Yv,meshphong_frag:$v,meshphysical_vert:Kv,meshphysical_frag:Zv,meshtoon_vert:jv,meshtoon_frag:Jv,points_vert:Qv,points_frag:ex,shadow_vert:tx,shadow_frag:nx,sprite_vert:ix,sprite_frag:rx},me={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},_i={basic:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new _t(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:pn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:pn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new _t(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:pn([me.points,me.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:pn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:pn([me.common,me.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:pn([me.sprite,me.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:pn([me.common,me.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:pn([me.lights,me.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};_i.physical={uniforms:pn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Ia={r:0,b:0,g:0},wr=new Gi,sx=new Wt;function ox(r,e,t,n,i,s,o){const a=new _t(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function _(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function g(E){let v=!1;const A=_(E);A===null?p(a,l):A&&A.isColor&&(p(A,1),v=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(E,v){const A=_(v);A&&(A.isCubeTexture||A.mapping===Fl)?(u===void 0&&(u=new Oi(new fa(1,1,1),new mr({name:"BackgroundCubeMaterial",uniforms:Qs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),wr.copy(v.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(sx.makeRotationFromEuler(wr)),u.material.toneMapped=ft.getTransfer(A.colorSpace)!==gt,(f!==A||d!==A.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,f=A,d=A.version,h=r.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Oi(new Bl(2,2),new mr({name:"BackgroundMaterial",uniforms:Qs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ft.getTransfer(A.colorSpace)!==gt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,f=A,d=A.version,h=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,v){E.getRGB(Ia,sp(r)),n.buffers.color.setClear(Ia.r,Ia.g,Ia.b,v,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:g,addToRenderList:m,dispose:b}}function ax(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(x,C,O,k,H){let Y=!1;const X=f(k,O,C);s!==X&&(s=X,c(s.object)),Y=h(x,k,O,H),Y&&_(x,k,O,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(x,C,O,k),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function f(x,C,O){const k=O.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let Y=H[C.id];Y===void 0&&(Y={},H[C.id]=Y);let X=Y[k];return X===void 0&&(X=d(l()),Y[k]=X),X}function d(x){const C=[],O=[],k=[];for(let H=0;H<t;H++)C[H]=0,O[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:k,object:x,attributes:{},index:null}}function h(x,C,O,k){const H=s.attributes,Y=C.attributes;let X=0;const G=O.getAttributes();for(const z in G)if(G[z].location>=0){const L=H[z];let fe=Y[z];if(fe===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(fe=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(fe=x.instanceColor)),L===void 0||L.attribute!==fe||fe&&L.data!==fe.data)return!0;X++}return s.attributesNum!==X||s.index!==k}function _(x,C,O,k){const H={},Y=C.attributes;let X=0;const G=O.getAttributes();for(const z in G)if(G[z].location>=0){let L=Y[z];L===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(L=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(L=x.instanceColor));const fe={};fe.attribute=L,L&&L.data&&(fe.data=L.data),H[z]=fe,X++}s.attributes=H,s.attributesNum=X,s.index=k}function g(){const x=s.newAttributes;for(let C=0,O=x.length;C<O;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){const O=s.newAttributes,k=s.enabledAttributes,H=s.attributeDivisors;O[x]=1,k[x]===0&&(r.enableVertexAttribArray(x),k[x]=1),H[x]!==C&&(r.vertexAttribDivisor(x,C),H[x]=C)}function b(){const x=s.newAttributes,C=s.enabledAttributes;for(let O=0,k=C.length;O<k;O++)C[O]!==x[O]&&(r.disableVertexAttribArray(O),C[O]=0)}function E(x,C,O,k,H,Y,X){X===!0?r.vertexAttribIPointer(x,C,O,H,Y):r.vertexAttribPointer(x,C,O,k,H,Y)}function v(x,C,O,k){g();const H=k.attributes,Y=O.getAttributes(),X=C.defaultAttributeValues;for(const G in Y){const z=Y[G];if(z.location>=0){let ne=H[G];if(ne===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor)),ne!==void 0){const L=ne.normalized,fe=ne.itemSize,Le=e.get(ne);if(Le===void 0)continue;const ot=Le.buffer,ke=Le.type,$=Le.bytesPerElement,ae=ke===r.INT||ke===r.UNSIGNED_INT||ne.gpuType===hf;if(ne.isInterleavedBufferAttribute){const te=ne.data,Ee=te.stride,Me=ne.offset;if(te.isInstancedInterleavedBuffer){for(let Fe=0;Fe<z.locationSize;Fe++)p(z.location+Fe,te.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Fe=0;Fe<z.locationSize;Fe++)m(z.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,ot);for(let Fe=0;Fe<z.locationSize;Fe++)E(z.location+Fe,fe/z.locationSize,ke,L,Ee*$,(Me+fe/z.locationSize*Fe)*$,ae)}else{if(ne.isInstancedBufferAttribute){for(let te=0;te<z.locationSize;te++)p(z.location+te,ne.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let te=0;te<z.locationSize;te++)m(z.location+te);r.bindBuffer(r.ARRAY_BUFFER,ot);for(let te=0;te<z.locationSize;te++)E(z.location+te,fe/z.locationSize,ke,L,fe*$,fe/z.locationSize*te*$,ae)}}else if(X!==void 0){const L=X[G];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(z.location,L);break;case 3:r.vertexAttrib3fv(z.location,L);break;case 4:r.vertexAttrib4fv(z.location,L);break;default:r.vertexAttrib1fv(z.location,L)}}}}b()}function A(){D();for(const x in n){const C=n[x];for(const O in C){const k=C[O];for(const H in k)u(k[H].object),delete k[H];delete C[O]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const O in C){const k=C[O];for(const H in k)u(k[H].object),delete k[H];delete C[O]}delete n[x.id]}function T(x){for(const C in n){const O=n[C];if(O[x.id]===void 0)continue;const k=O[x.id];for(const H in k)u(k[H].object),delete k[H];delete O[x.id]}}function D(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function lx(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let h=0;for(let _=0;_<f;_++)h+=u[_];t.update(h,n,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g]*d[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cx(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==ui&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const D=T===oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Vi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Fi&&!D)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:A,maxSamples:R}}function ux(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Lr,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||i;return i=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,E=b*4;let v=p.clippingState||null;l.value=v,v=u(_,d,E,h);for(let A=0;A!==E;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=h+g*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=h;E!==g;++E,v+=4)o.copy(f[E]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function fx(r){let e=new WeakMap;function t(o,a){return a===ru?o.mapping=Zs:a===su&&(o.mapping=js),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ru||a===su)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new hg(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ls=4,yh=[.125,.215,.35,.446,.526,.582],kr=20,vc=new Mg,Eh=new _t;let xc=null,Sc=0,Mc=0,yc=!1;const Ur=(1+Math.sqrt(5))/2,Es=1/Ur,Th=[new q(-Ur,Es,0),new q(Ur,Es,0),new q(-Es,0,Ur),new q(Es,0,Ur),new q(0,Ur,-Es),new q(0,Ur,Es),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],hx=new q;class bh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=hx}=s;xc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xc,Sc,Mc),this._renderer.xr.enabled=yc,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:oa,format:ui,colorSpace:Js,depthBuffer:!1},i=Ah(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dx(s)),this._blurMaterial=px(s,e,t)}return i}_compileMaterial(e){const t=new Oi(this._lodPlanes[0],e);this._renderer.compile(t,vc)}_sceneToCubeUV(e,t,n,i,s){const l=new Qn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Eh),f.toneMapping=ur,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null));const g=new np({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),m=new Oi(new fa,g);let p=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,p=!0):(g.color.copy(Eh),p=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const A=this._cubeSize;Na(i,v*A,E>2?A:0,A,A),f.setRenderTarget(i),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Zs||e.mapping===js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Oi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Na(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,vc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Th[(i-s-1)%Th.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Oi(this._lodPlanes[i],c),d=c.uniforms,h=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*kr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):kr;m>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kr}`);const p=[];let b=0;for(let T=0;T<kr;++T){const D=T/g,M=Math.exp(-D*D/2);p.push(M),T===0?b+=M:T<m&&(b+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-n;const v=this._sizeLods[i],A=3*v*(i>E-Ls?i-E+Ls:0),R=4*(this._cubeSize-v);Na(t,A,R,3*v,2*v),l.setRenderTarget(t),l.render(f,vc)}}function dx(r){const e=[],t=[],n=[];let i=r;const s=r-Ls+1+yh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Ls?l=yh[o-r+Ls-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,_=6,g=3,m=2,p=1,b=new Float32Array(g*_*h),E=new Float32Array(m*_*h),v=new Float32Array(p*_*h);for(let R=0;R<h;R++){const T=R%3*2/3-1,D=R>2?0:-1,M=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];b.set(M,g*_*R),E.set(d,m*_*R);const x=[R,R,R,R,R,R];v.set(x,p*_*R)}const A=new qi;A.setAttribute("position",new hi(b,g)),A.setAttribute("uv",new hi(E,m)),A.setAttribute("faceIndex",new hi(v,p)),e.push(A),i>Ls&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ah(r,e,t){const n=new ns(r,e,t);return n.texture.mapping=Fl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Na(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function px(r,e,t){const n=new Float32Array(kr),i=new q(0,1,0);return new mr({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function wh(){return new mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Rh(){return new mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function xf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mx(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ru||l===su,u=l===Zs||l===js;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new bh(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new bh(r)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function _x(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&zs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gx(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],r.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,_=f.attributes.position;let g=0;if(h!==null){const b=h.array;g=h.version;for(let E=0,v=b.length;E<v;E+=3){const A=b[E+0],R=b[E+1],T=b[E+2];d.push(A,R,R,T,T,A)}}else if(_!==void 0){const b=_.array;g=_.version;for(let E=0,v=b.length/3-1;E<v;E+=3){const A=E+0,R=E+1,T=E+2;d.push(A,R,R,T,T,A)}}else return;const m=new(jd(d)?rp:ip)(d,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function vx(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*o),t.update(h,n,1)}function c(d,h,_){_!==0&&(r.drawElementsInstanced(n,h,s,d*o,_),t.update(h,n,_))}function u(d,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=h[p];t.update(m,n,1)}function f(d,h,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,d,0,g,0,_);let p=0;for(let b=0;b<_;b++)p+=h[b]*g[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function xx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Sx(r,e,t){const n=new WeakMap,i=new Bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let x=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var h=x;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let A=a.attributes.position.count*v,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const T=new Float32Array(A*R*4*f),D=new Jd(T,A,R,f);D.type=Fi,D.needsUpdate=!0;const M=v*4;for(let C=0;C<f;C++){const O=p[C],k=b[C],H=E[C],Y=A*R*4*C;for(let X=0;X<O.count;X++){const G=X*M;_===!0&&(i.fromBufferAttribute(O,X),T[Y+G+0]=i.x,T[Y+G+1]=i.y,T[Y+G+2]=i.z,T[Y+G+3]=0),g===!0&&(i.fromBufferAttribute(k,X),T[Y+G+4]=i.x,T[Y+G+5]=i.y,T[Y+G+6]=i.z,T[Y+G+7]=0),m===!0&&(i.fromBufferAttribute(H,X),T[Y+G+8]=i.x,T[Y+G+9]=i.y,T[Y+G+10]=i.z,T[Y+G+11]=H.itemSize===4?i.w:1)}}d={count:f,texture:D,size:new vt(A,R)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Mx(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const hp=new Tn,Ch=new up(1,1),dp=new Jd,pp=new K_,mp=new ap,Ph=[],Dh=[],Lh=new Float32Array(16),Uh=new Float32Array(9),Ih=new Float32Array(4);function lo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ph[i];if(s===void 0&&(s=new Float32Array(i),Ph[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function $t(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Kt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function zl(r,e){let t=Dh[e];t===void 0&&(t=new Int32Array(e),Dh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function yx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ex(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2fv(this.addr,e),Kt(t,e)}}function Tx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;r.uniform3fv(this.addr,e),Kt(t,e)}}function bx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4fv(this.addr,e),Kt(t,e)}}function Ax(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;Ih.set(n),r.uniformMatrix2fv(this.addr,!1,Ih),Kt(t,n)}}function wx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;Uh.set(n),r.uniformMatrix3fv(this.addr,!1,Uh),Kt(t,n)}}function Rx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;Lh.set(n),r.uniformMatrix4fv(this.addr,!1,Lh),Kt(t,n)}}function Cx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Px(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2iv(this.addr,e),Kt(t,e)}}function Dx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3iv(this.addr,e),Kt(t,e)}}function Lx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4iv(this.addr,e),Kt(t,e)}}function Ux(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ix(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2uiv(this.addr,e),Kt(t,e)}}function Nx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3uiv(this.addr,e),Kt(t,e)}}function Fx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4uiv(this.addr,e),Kt(t,e)}}function Ox(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ch.compareFunction=Zd,s=Ch):s=hp,t.setTexture2D(e||s,i)}function Bx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pp,i)}function zx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||mp,i)}function kx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||dp,i)}function Hx(r){switch(r){case 5126:return yx;case 35664:return Ex;case 35665:return Tx;case 35666:return bx;case 35674:return Ax;case 35675:return wx;case 35676:return Rx;case 5124:case 35670:return Cx;case 35667:case 35671:return Px;case 35668:case 35672:return Dx;case 35669:case 35673:return Lx;case 5125:return Ux;case 36294:return Ix;case 36295:return Nx;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return kx}}function Vx(r,e){r.uniform1fv(this.addr,e)}function Gx(r,e){const t=lo(e,this.size,2);r.uniform2fv(this.addr,t)}function Wx(r,e){const t=lo(e,this.size,3);r.uniform3fv(this.addr,t)}function Xx(r,e){const t=lo(e,this.size,4);r.uniform4fv(this.addr,t)}function qx(r,e){const t=lo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Yx(r,e){const t=lo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function $x(r,e){const t=lo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Kx(r,e){r.uniform1iv(this.addr,e)}function Zx(r,e){r.uniform2iv(this.addr,e)}function jx(r,e){r.uniform3iv(this.addr,e)}function Jx(r,e){r.uniform4iv(this.addr,e)}function Qx(r,e){r.uniform1uiv(this.addr,e)}function eS(r,e){r.uniform2uiv(this.addr,e)}function tS(r,e){r.uniform3uiv(this.addr,e)}function nS(r,e){r.uniform4uiv(this.addr,e)}function iS(r,e,t){const n=this.cache,i=e.length,s=zl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||hp,s[o])}function rS(r,e,t){const n=this.cache,i=e.length,s=zl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||pp,s[o])}function sS(r,e,t){const n=this.cache,i=e.length,s=zl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||mp,s[o])}function oS(r,e,t){const n=this.cache,i=e.length,s=zl(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||dp,s[o])}function aS(r){switch(r){case 5126:return Vx;case 35664:return Gx;case 35665:return Wx;case 35666:return Xx;case 35674:return qx;case 35675:return Yx;case 35676:return $x;case 5124:case 35670:return Kx;case 35667:case 35671:return Zx;case 35668:case 35672:return jx;case 35669:case 35673:return Jx;case 5125:return Qx;case 36294:return eS;case 36295:return tS;case 36296:return nS;case 35678:case 36198:case 36298:case 36306:case 35682:return iS;case 35679:case 36299:case 36307:return rS;case 35680:case 36300:case 36308:case 36293:return sS;case 36289:case 36303:case 36311:case 36292:return oS}}class lS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hx(t.type)}}class cS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aS(t.type)}}class uS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ec=/(\w+)(\])?(\[|\.)?/g;function Nh(r,e){r.seq.push(e),r.map[e.id]=e}function fS(r,e,t){const n=r.name,i=n.length;for(Ec.lastIndex=0;;){const s=Ec.exec(n),o=Ec.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Nh(t,c===void 0?new lS(a,r,e):new cS(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new uS(a),Nh(t,f)),t=f}}}class sl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);fS(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Fh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const hS=37297;let dS=0;function pS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Oh=new Ze;function mS(r){ft._getMatrix(Oh,ft.workingColorSpace,r);const e=`mat3( ${Oh.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(r)){case gl:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Bh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+pS(r.getShaderSource(e),a)}else return s}function _S(r,e){const t=mS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gS(r,e){let t;switch(e){case y_:t="Linear";break;case E_:t="Reinhard";break;case T_:t="Cineon";break;case b_:t="ACESFilmic";break;case w_:t="AgX";break;case R_:t="Neutral";break;case A_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fa=new q;function vS(){ft.getLuminanceCoefficients(Fa);const r=Fa.x.toFixed(4),e=Fa.y.toFixed(4),t=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function SS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function MS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function yo(r){return r!==""}function zh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fu(r){return r.replace(yS,TS)}const ES=new Map;function TS(r,e){let t=Je[e];if(t===void 0){const n=ES.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fu(t)}const bS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(r){return r.replace(bS,AS)}function AS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===t_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function RS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zs:case js:e="ENVMAP_TYPE_CUBE";break;case Fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CS(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===js&&(e="ENVMAP_MODE_REFRACTION"),e}function PS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case kd:e="ENVMAP_BLENDING_MULTIPLY";break;case S_:e="ENVMAP_BLENDING_MIX";break;case M_:e="ENVMAP_BLENDING_ADD";break}return e}function DS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function LS(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=wS(t),c=RS(t),u=CS(t),f=PS(t),d=DS(t),h=xS(t),_=SS(s),g=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(yo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(yo).join(`
`),p.length>0&&(p+=`
`)):(m=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),p=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ur?"#define TONE_MAPPING":"",t.toneMapping!==ur?Je.tonemapping_pars_fragment:"",t.toneMapping!==ur?gS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,_S("linearToOutputTexel",t.outputColorSpace),vS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yo).join(`
`)),o=Fu(o),o=zh(o,t),o=kh(o,t),a=Fu(a),a=zh(a,t),a=kh(a,t),o=Hh(o),a=Hh(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=b+m+o,v=b+p+a,A=Fh(i,i.VERTEX_SHADER,E),R=Fh(i,i.FRAGMENT_SHADER,v);i.attachShader(g,A),i.attachShader(g,R),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(C){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(g)||"",k=i.getShaderInfoLog(A)||"",H=i.getShaderInfoLog(R)||"",Y=O.trim(),X=k.trim(),G=H.trim();let z=!0,ne=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,R);else{const L=Bh(i,A,"vertex"),fe=Bh(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+L+`
`+fe)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||G==="")&&(ne=!1);ne&&(C.diagnostics={runnable:z,programLog:Y,vertexShader:{log:X,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(A),i.deleteShader(R),D=new sl(i,g),M=MS(i,g)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,hS)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=R,this}let US=0;class IS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new NS(e),t.set(e,n)),n}}class NS{constructor(e){this.id=US++,this.code=e,this.usedTimes=0}}function FS(r,e,t,n,i,s,o){const a=new ep,l=new IS,c=new Set,u=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let h=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,C,O,k){const H=O.fog,Y=k.geometry,X=M.isMeshStandardMaterial?O.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),z=G&&G.mapping===Fl?G.image.height:null,ne=_[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const L=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,fe=L!==void 0?L.length:0;let Le=0;Y.morphAttributes.position!==void 0&&(Le=1),Y.morphAttributes.normal!==void 0&&(Le=2),Y.morphAttributes.color!==void 0&&(Le=3);let ot,ke,$,ae;if(ne){const _e=_i[ne];ot=_e.vertexShader,ke=_e.fragmentShader}else ot=M.vertexShader,ke=M.fragmentShader,l.update(M),$=l.getVertexShaderID(M),ae=l.getFragmentShaderID(M);const te=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),Me=k.isInstancedMesh===!0,Fe=k.isBatchedMesh===!0,rt=!!M.map,He=!!M.matcap,P=!!G,Ge=!!M.aoMap,ye=!!M.lightMap,qe=!!M.bumpMap,F=!!M.normalMap,tt=!!M.displacementMap,ge=!!M.emissiveMap,We=!!M.metalnessMap,$e=!!M.roughnessMap,ht=M.anisotropy>0,w=M.clearcoat>0,S=M.dispersion>0,B=M.iridescence>0,Z=M.sheen>0,j=M.transmission>0,K=ht&&!!M.anisotropyMap,ve=w&&!!M.clearcoatMap,se=w&&!!M.clearcoatNormalMap,Ae=w&&!!M.clearcoatRoughnessMap,he=B&&!!M.iridescenceMap,re=B&&!!M.iridescenceThicknessMap,ue=Z&&!!M.sheenColorMap,Ue=Z&&!!M.sheenRoughnessMap,we=!!M.specularMap,ce=!!M.specularColorMap,Ve=!!M.specularIntensityMap,U=j&&!!M.transmissionMap,ie=j&&!!M.thicknessMap,oe=!!M.gradientMap,pe=!!M.alphaMap,ee=M.alphaTest>0,J=!!M.alphaHash,Se=!!M.extensions;let Ne=ur;M.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ne=r.toneMapping);const ct={shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:ot,fragmentShader:ke,defines:M.defines,customVertexShaderID:$,customFragmentShaderID:ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Fe,batchingColor:Fe&&k._colorsTexture!==null,instancing:Me,instancingColor:Me&&k.instanceColor!==null,instancingMorph:Me&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Js,alphaToCoverage:!!M.alphaToCoverage,map:rt,matcap:He,envMap:P,envMapMode:P&&G.mapping,envMapCubeUVHeight:z,aoMap:Ge,lightMap:ye,bumpMap:qe,normalMap:F,displacementMap:d&&tt,emissiveMap:ge,normalMapObjectSpace:F&&M.normalMapType===U_,normalMapTangentSpace:F&&M.normalMapType===L_,metalnessMap:We,roughnessMap:$e,anisotropy:ht,anisotropyMap:K,clearcoat:w,clearcoatMap:ve,clearcoatNormalMap:se,clearcoatRoughnessMap:Ae,dispersion:S,iridescence:B,iridescenceMap:he,iridescenceThicknessMap:re,sheen:Z,sheenColorMap:ue,sheenRoughnessMap:Ue,specularMap:we,specularColorMap:ce,specularIntensityMap:Ve,transmission:j,transmissionMap:U,thicknessMap:ie,gradientMap:oe,opaque:M.transparent===!1&&M.blending===Bs&&M.alphaToCoverage===!1,alphaMap:pe,alphaTest:ee,alphaHash:J,combine:M.combine,mapUv:rt&&g(M.map.channel),aoMapUv:Ge&&g(M.aoMap.channel),lightMapUv:ye&&g(M.lightMap.channel),bumpMapUv:qe&&g(M.bumpMap.channel),normalMapUv:F&&g(M.normalMap.channel),displacementMapUv:tt&&g(M.displacementMap.channel),emissiveMapUv:ge&&g(M.emissiveMap.channel),metalnessMapUv:We&&g(M.metalnessMap.channel),roughnessMapUv:$e&&g(M.roughnessMap.channel),anisotropyMapUv:K&&g(M.anisotropyMap.channel),clearcoatMapUv:ve&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&g(M.sheenRoughnessMap.channel),specularMapUv:we&&g(M.specularMap.channel),specularColorMapUv:ce&&g(M.specularColorMap.channel),specularIntensityMapUv:Ve&&g(M.specularIntensityMap.channel),transmissionMapUv:U&&g(M.transmissionMap.channel),thicknessMapUv:ie&&g(M.thicknessMap.channel),alphaMapUv:pe&&g(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(F||ht),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(rt||pe),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Le,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ne,decodeVideoTexture:rt&&M.map.isVideoTexture===!0&&ft.getTransfer(M.map.colorSpace)===gt,decodeVideoTextureEmissive:ge&&M.emissiveMap.isVideoTexture===!0&&ft.getTransfer(M.emissiveMap.colorSpace)===gt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ii,flipSided:M.side===En,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Se&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&M.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)x.push(C),x.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(b(x,M),E(x,M),x.push(r.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function b(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function E(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const x=_[M.type];let C;if(x){const O=_i[x];C=lg.clone(O.uniforms)}else C=M.uniforms;return C}function A(M,x){let C;for(let O=0,k=u.length;O<k;O++){const H=u[O];if(H.cacheKey===x){C=H,++C.usedTimes;break}}return C===void 0&&(C=new LS(r,x,M,s),u.push(C)),C}function R(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:D}}function OS(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function BS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Gh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Wh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,h,_,g,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,d,h,_,g,m){const p=o(f,d,h,_,g,m);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):t.push(p)}function l(f,d,h,_,g,m){const p=o(f,d,h,_,g,m);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||BS),n.length>1&&n.sort(d||Gh),i.length>1&&i.sort(d||Gh)}function u(){for(let f=e,d=r.length;f<d;f++){const h=r[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function zS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Wh,r.set(n,[o])):i>=s.length?(o=new Wh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function kS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new _t};break;case"SpotLight":t={position:new q,direction:new q,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function HS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let VS=0;function GS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function WS(r){const e=new kS,t=HS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const i=new q,s=new Wt,o=new Wt;function a(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let h=0,_=0,g=0,m=0,p=0,b=0,E=0,v=0,A=0,R=0,T=0;c.sort(GS);for(let M=0,x=c.length;M<x;M++){const C=c[M],O=C.color,k=C.intensity,H=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=O.r*k,f+=O.g*k,d+=O.b*k;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],k);T++}else if(C.isDirectionalLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const G=C.shadow,z=t.get(C);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.directionalShadow[h]=z,n.directionalShadowMap[h]=Y,n.directionalShadowMatrix[h]=C.shadow.matrix,b++}n.directional[h]=X,h++}else if(C.isSpotLight){const X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(O).multiplyScalar(k),X.distance=H,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[g]=X;const G=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,G.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[g]=G.matrix,C.castShadow){const z=t.get(C);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=Y,v++}g++}else if(C.isRectAreaLight){const X=e.get(C);X.color.copy(O).multiplyScalar(k),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=X,m++}else if(C.isPointLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const G=C.shadow,z=t.get(C);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=C.shadow.matrix,E++}n.point[_]=X,_++}else if(C.isHemisphereLight){const X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(k),X.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[p]=X,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==h||D.pointLength!==_||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==b||D.numPointShadows!==E||D.numSpotShadows!==v||D.numSpotMaps!==A||D.numLightProbes!==T)&&(n.directional.length=h,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,D.directionalLength=h,D.pointLength=_,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=b,D.numPointShadows=E,D.numSpotShadows=v,D.numSpotMaps=A,D.numLightProbes=T,n.version=VS++)}function l(c,u){let f=0,d=0,h=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const E=c[p];if(E.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(E.isSpotLight){const v=n.spot[h];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(E.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Xh(r){const e=new WS(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function XS(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Xh(r),e.set(i,[a])):s>=o.length?(a=new Xh(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const qS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $S(r,e,t){let n=new lp;const i=new vt,s=new vt,o=new Bt,a=new xg({depthPacking:D_}),l=new Sg,c={},u=t.maxTextureSize,f={[pr]:En,[En]:pr,[Ii]:Ii},d=new mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:qS,fragmentShader:YS}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new qi;_.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Oi(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zd;let p=this.type;this.render=function(R,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=r.getRenderTarget(),x=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),O=r.state;O.setBlending(cr),O.buffers.depth.getReversed()?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=p!==Di&&this.type===Di,H=p===Di&&this.type!==Di;for(let Y=0,X=R.length;Y<X;Y++){const G=R[Y],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const ne=z.getFrameExtents();if(i.multiply(ne),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ne.x),i.x=s.x*ne.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ne.y),i.y=s.y*ne.y,z.mapSize.y=s.y)),z.map===null||k===!0||H===!0){const fe=this.type!==Di?{minFilter:fi,magFilter:fi}:{};z.map!==null&&z.map.dispose(),z.map=new ns(i.x,i.y,fe),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const L=z.getViewportCount();for(let fe=0;fe<L;fe++){const Le=z.getViewport(fe);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),O.viewport(o),z.updateMatrices(G,fe),n=z.getFrustum(),v(T,D,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===Di&&b(z,D),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,x,C)};function b(R,T){const D=e.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ns(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(T,null,D,d,g,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(T,null,D,h,g,null)}function E(R,T,D,M){let x=null;const C=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)x=C;else if(x=D.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const O=x.uuid,k=T.uuid;let H=c[O];H===void 0&&(H={},c[O]=H);let Y=H[k];Y===void 0&&(Y=x.clone(),H[k]=Y,T.addEventListener("dispose",A)),x=Y}if(x.visible=T.visible,x.wireframe=T.wireframe,M===Di?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:f[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=r.properties.get(x);O.light=D}return x}function v(R,T,D,M,x){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Di)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const k=e.update(R),H=R.material;if(Array.isArray(H)){const Y=k.groups;for(let X=0,G=Y.length;X<G;X++){const z=Y[X],ne=H[z.materialIndex];if(ne&&ne.visible){const L=E(R,ne,M,x);R.onBeforeShadow(r,R,T,D,k,L,z),r.renderBufferDirect(D,null,k,L,R,z),R.onAfterShadow(r,R,T,D,k,L,z)}}}else if(H.visible){const Y=E(R,H,M,x);R.onBeforeShadow(r,R,T,D,k,Y,null),r.renderBufferDirect(D,null,k,Y,R,null),R.onAfterShadow(r,R,T,D,k,Y,null)}}const O=R.children;for(let k=0,H=O.length;k<H;k++)v(O[k],T,D,M,x)}function A(R){R.target.removeEventListener("dispose",A);for(const D in c){const M=c[D],x=R.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const KS={[jc]:Jc,[Qc]:nu,[eu]:iu,[Ks]:tu,[Jc]:jc,[nu]:Qc,[iu]:eu,[tu]:Ks};function ZS(r,e){function t(){let U=!1;const ie=new Bt;let oe=null;const pe=new Bt(0,0,0,0);return{setMask:function(ee){oe!==ee&&!U&&(r.colorMask(ee,ee,ee,ee),oe=ee)},setLocked:function(ee){U=ee},setClear:function(ee,J,Se,Ne,ct){ct===!0&&(ee*=Ne,J*=Ne,Se*=Ne),ie.set(ee,J,Se,Ne),pe.equals(ie)===!1&&(r.clearColor(ee,J,Se,Ne),pe.copy(ie))},reset:function(){U=!1,oe=null,pe.set(-1,0,0,0)}}}function n(){let U=!1,ie=!1,oe=null,pe=null,ee=null;return{setReversed:function(J){if(ie!==J){const Se=e.get("EXT_clip_control");J?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ie=J;const Ne=ee;ee=null,this.setClear(Ne)}},getReversed:function(){return ie},setTest:function(J){J?te(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(J){oe!==J&&!U&&(r.depthMask(J),oe=J)},setFunc:function(J){if(ie&&(J=KS[J]),pe!==J){switch(J){case jc:r.depthFunc(r.NEVER);break;case Jc:r.depthFunc(r.ALWAYS);break;case Qc:r.depthFunc(r.LESS);break;case Ks:r.depthFunc(r.LEQUAL);break;case eu:r.depthFunc(r.EQUAL);break;case tu:r.depthFunc(r.GEQUAL);break;case nu:r.depthFunc(r.GREATER);break;case iu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=J}},setLocked:function(J){U=J},setClear:function(J){ee!==J&&(ie&&(J=1-J),r.clearDepth(J),ee=J)},reset:function(){U=!1,oe=null,pe=null,ee=null,ie=!1}}}function i(){let U=!1,ie=null,oe=null,pe=null,ee=null,J=null,Se=null,Ne=null,ct=null;return{setTest:function(_e){U||(_e?te(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(_e){ie!==_e&&!U&&(r.stencilMask(_e),ie=_e)},setFunc:function(_e,Re,Ye){(oe!==_e||pe!==Re||ee!==Ye)&&(r.stencilFunc(_e,Re,Ye),oe=_e,pe=Re,ee=Ye)},setOp:function(_e,Re,Ye){(J!==_e||Se!==Re||Ne!==Ye)&&(r.stencilOp(_e,Re,Ye),J=_e,Se=Re,Ne=Ye)},setLocked:function(_e){U=_e},setClear:function(_e){ct!==_e&&(r.clearStencil(_e),ct=_e)},reset:function(){U=!1,ie=null,oe=null,pe=null,ee=null,J=null,Se=null,Ne=null,ct=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],_=null,g=!1,m=null,p=null,b=null,E=null,v=null,A=null,R=null,T=new _t(0,0,0),D=0,M=!1,x=null,C=null,O=null,k=null,H=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=G>=2);let ne=null,L={};const fe=r.getParameter(r.SCISSOR_BOX),Le=r.getParameter(r.VIEWPORT),ot=new Bt().fromArray(fe),ke=new Bt().fromArray(Le);function $(U,ie,oe,pe){const ee=new Uint8Array(4),J=r.createTexture();r.bindTexture(U,J),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Se=0;Se<oe;Se++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,ee):r.texImage2D(ie+Se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ee);return J}const ae={};ae[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(r.DEPTH_TEST),o.setFunc(Ks),qe(!1),F(Zf),te(r.CULL_FACE),Ge(cr);function te(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function Ee(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function Me(U,ie){return f[U]!==ie?(r.bindFramebuffer(U,ie),f[U]=ie,U===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ie),U===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function Fe(U,ie){let oe=h,pe=!1;if(U){oe=d.get(ie),oe===void 0&&(oe=[],d.set(ie,oe));const ee=U.textures;if(oe.length!==ee.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let J=0,Se=ee.length;J<Se;J++)oe[J]=r.COLOR_ATTACHMENT0+J;oe.length=ee.length,pe=!0}}else oe[0]!==r.BACK&&(oe[0]=r.BACK,pe=!0);pe&&r.drawBuffers(oe)}function rt(U){return _!==U?(r.useProgram(U),_=U,!0):!1}const He={[zr]:r.FUNC_ADD,[i_]:r.FUNC_SUBTRACT,[r_]:r.FUNC_REVERSE_SUBTRACT};He[s_]=r.MIN,He[o_]=r.MAX;const P={[a_]:r.ZERO,[l_]:r.ONE,[c_]:r.SRC_COLOR,[Kc]:r.SRC_ALPHA,[m_]:r.SRC_ALPHA_SATURATE,[d_]:r.DST_COLOR,[f_]:r.DST_ALPHA,[u_]:r.ONE_MINUS_SRC_COLOR,[Zc]:r.ONE_MINUS_SRC_ALPHA,[p_]:r.ONE_MINUS_DST_COLOR,[h_]:r.ONE_MINUS_DST_ALPHA,[__]:r.CONSTANT_COLOR,[g_]:r.ONE_MINUS_CONSTANT_COLOR,[v_]:r.CONSTANT_ALPHA,[x_]:r.ONE_MINUS_CONSTANT_ALPHA};function Ge(U,ie,oe,pe,ee,J,Se,Ne,ct,_e){if(U===cr){g===!0&&(Ee(r.BLEND),g=!1);return}if(g===!1&&(te(r.BLEND),g=!0),U!==n_){if(U!==m||_e!==M){if((p!==zr||v!==zr)&&(r.blendEquation(r.FUNC_ADD),p=zr,v=zr),_e)switch(U){case Bs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $c:r.blendFunc(r.ONE,r.ONE);break;case jf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Bs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $c:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case jf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,E=null,A=null,R=null,T.set(0,0,0),D=0,m=U,M=_e}return}ee=ee||ie,J=J||oe,Se=Se||pe,(ie!==p||ee!==v)&&(r.blendEquationSeparate(He[ie],He[ee]),p=ie,v=ee),(oe!==b||pe!==E||J!==A||Se!==R)&&(r.blendFuncSeparate(P[oe],P[pe],P[J],P[Se]),b=oe,E=pe,A=J,R=Se),(Ne.equals(T)===!1||ct!==D)&&(r.blendColor(Ne.r,Ne.g,Ne.b,ct),T.copy(Ne),D=ct),m=U,M=!1}function ye(U,ie){U.side===Ii?Ee(r.CULL_FACE):te(r.CULL_FACE);let oe=U.side===En;ie&&(oe=!oe),qe(oe),U.blending===Bs&&U.transparent===!1?Ge(cr):Ge(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const pe=U.stencilWrite;a.setTest(pe),pe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ge(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function qe(U){x!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),x=U)}function F(U){U!==Qm?(te(r.CULL_FACE),U!==C&&(U===Zf?r.cullFace(r.BACK):U===e_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),C=U}function tt(U){U!==O&&(X&&r.lineWidth(U),O=U)}function ge(U,ie,oe){U?(te(r.POLYGON_OFFSET_FILL),(k!==ie||H!==oe)&&(r.polygonOffset(ie,oe),k=ie,H=oe)):Ee(r.POLYGON_OFFSET_FILL)}function We(U){U?te(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function $e(U){U===void 0&&(U=r.TEXTURE0+Y-1),ne!==U&&(r.activeTexture(U),ne=U)}function ht(U,ie,oe){oe===void 0&&(ne===null?oe=r.TEXTURE0+Y-1:oe=ne);let pe=L[oe];pe===void 0&&(pe={type:void 0,texture:void 0},L[oe]=pe),(pe.type!==U||pe.texture!==ie)&&(ne!==oe&&(r.activeTexture(oe),ne=oe),r.bindTexture(U,ie||ae[U]),pe.type=U,pe.texture=ie)}function w(){const U=L[ne];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{r.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{r.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{r.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{r.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{r.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{r.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{r.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{r.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(U){ot.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),ot.copy(U))}function Ue(U){ke.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ke.copy(U))}function we(U,ie){let oe=c.get(ie);oe===void 0&&(oe=new WeakMap,c.set(ie,oe));let pe=oe.get(U);pe===void 0&&(pe=r.getUniformBlockIndex(ie,U.name),oe.set(U,pe))}function ce(U,ie){const pe=c.get(ie).get(U);l.get(ie)!==pe&&(r.uniformBlockBinding(ie,pe,U.__bindingPointIndex),l.set(ie,pe))}function Ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ne=null,L={},f={},d=new WeakMap,h=[],_=null,g=!1,m=null,p=null,b=null,E=null,v=null,A=null,R=null,T=new _t(0,0,0),D=0,M=!1,x=null,C=null,O=null,k=null,H=null,ot.set(0,0,r.canvas.width,r.canvas.height),ke.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:Ee,bindFramebuffer:Me,drawBuffers:Fe,useProgram:rt,setBlending:Ge,setMaterial:ye,setFlipSided:qe,setCullFace:F,setLineWidth:tt,setPolygonOffset:ge,setScissorTest:We,activeTexture:$e,bindTexture:ht,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:he,texImage3D:re,updateUBOMapping:we,uniformBlockBinding:ce,texStorage2D:se,texStorage3D:Ae,texSubImage2D:Z,texSubImage3D:j,compressedTexSubImage2D:K,compressedTexSubImage3D:ve,scissor:ue,viewport:Ue,reset:Ve}}function jS(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,S){return h?new OffscreenCanvas(w,S):xl("canvas")}function g(w,S,B){let Z=1;const j=ht(w);if((j.width>B||j.height>B)&&(Z=B/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor(Z*j.width),ve=Math.floor(Z*j.height);f===void 0&&(f=_(K,ve));const se=S?_(K,ve):f;return se.width=K,se.height=ve,se.getContext("2d").drawImage(w,0,0,K,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+ve+")."),se}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){r.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(w,S,B,Z,j=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=S;if(S===r.RED&&(B===r.FLOAT&&(K=r.R32F),B===r.HALF_FLOAT&&(K=r.R16F),B===r.UNSIGNED_BYTE&&(K=r.R8)),S===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.R8UI),B===r.UNSIGNED_SHORT&&(K=r.R16UI),B===r.UNSIGNED_INT&&(K=r.R32UI),B===r.BYTE&&(K=r.R8I),B===r.SHORT&&(K=r.R16I),B===r.INT&&(K=r.R32I)),S===r.RG&&(B===r.FLOAT&&(K=r.RG32F),B===r.HALF_FLOAT&&(K=r.RG16F),B===r.UNSIGNED_BYTE&&(K=r.RG8)),S===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RG8UI),B===r.UNSIGNED_SHORT&&(K=r.RG16UI),B===r.UNSIGNED_INT&&(K=r.RG32UI),B===r.BYTE&&(K=r.RG8I),B===r.SHORT&&(K=r.RG16I),B===r.INT&&(K=r.RG32I)),S===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RGB8UI),B===r.UNSIGNED_SHORT&&(K=r.RGB16UI),B===r.UNSIGNED_INT&&(K=r.RGB32UI),B===r.BYTE&&(K=r.RGB8I),B===r.SHORT&&(K=r.RGB16I),B===r.INT&&(K=r.RGB32I)),S===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),B===r.UNSIGNED_INT&&(K=r.RGBA32UI),B===r.BYTE&&(K=r.RGBA8I),B===r.SHORT&&(K=r.RGBA16I),B===r.INT&&(K=r.RGBA32I)),S===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),S===r.RGBA){const ve=j?gl:ft.getTransfer(Z);B===r.FLOAT&&(K=r.RGBA32F),B===r.HALF_FLOAT&&(K=r.RGBA16F),B===r.UNSIGNED_BYTE&&(K=ve===gt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(w,S){let B;return w?S===null||S===ts||S===Yo?B=r.DEPTH24_STENCIL8:S===Fi?B=r.DEPTH32F_STENCIL8:S===qo&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ts||S===Yo?B=r.DEPTH_COMPONENT24:S===Fi?B=r.DEPTH_COMPONENT32F:S===qo&&(B=r.DEPTH_COMPONENT16),B}function A(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==fi&&w.minFilter!==vi?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function R(w){const S=w.target;S.removeEventListener("dispose",R),D(S),S.isVideoTexture&&u.delete(S)}function T(w){const S=w.target;S.removeEventListener("dispose",T),x(S)}function D(w){const S=n.get(w);if(S.__webglInit===void 0)return;const B=w.source,Z=d.get(B);if(Z){const j=Z[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(w),Object.keys(Z).length===0&&d.delete(B)}n.remove(w)}function M(w){const S=n.get(w);r.deleteTexture(S.__webglTexture);const B=w.source,Z=d.get(B);delete Z[S.__cacheKey],o.memory.textures--}function x(w){const S=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let j=0;j<S.__webglFramebuffer[Z].length;j++)r.deleteFramebuffer(S.__webglFramebuffer[Z][j]);else r.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)r.deleteFramebuffer(S.__webglFramebuffer[Z]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=w.textures;for(let Z=0,j=B.length;Z<j;Z++){const K=n.get(B[Z]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(B[Z])}n.remove(w)}let C=0;function O(){C=0}function k(){const w=C;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),C+=1,w}function H(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function Y(w,S){const B=n.get(w);if(w.isVideoTexture&&We(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(B,w,S);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+S)}function X(w,S){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){ae(B,w,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+S)}function G(w,S){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){ae(B,w,S);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+S)}function z(w,S){const B=n.get(w);if(w.version>0&&B.__version!==w.version){te(B,w,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+S)}const ne={[ou]:r.REPEAT,[Hr]:r.CLAMP_TO_EDGE,[au]:r.MIRRORED_REPEAT},L={[fi]:r.NEAREST,[C_]:r.NEAREST_MIPMAP_NEAREST,[da]:r.NEAREST_MIPMAP_LINEAR,[vi]:r.LINEAR,[Yl]:r.LINEAR_MIPMAP_NEAREST,[Vr]:r.LINEAR_MIPMAP_LINEAR},fe={[I_]:r.NEVER,[k_]:r.ALWAYS,[N_]:r.LESS,[Zd]:r.LEQUAL,[F_]:r.EQUAL,[z_]:r.GEQUAL,[O_]:r.GREATER,[B_]:r.NOTEQUAL};function Le(w,S){if(S.type===Fi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===vi||S.magFilter===Yl||S.magFilter===da||S.magFilter===Vr||S.minFilter===vi||S.minFilter===Yl||S.minFilter===da||S.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,ne[S.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,ne[S.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,ne[S.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,L[S.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,L[S.minFilter]),S.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===fi||S.minFilter!==da&&S.minFilter!==Vr||S.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ot(w,S){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",R));const Z=S.source;let j=d.get(Z);j===void 0&&(j={},d.set(Z,j));const K=H(S);if(K!==w.__cacheKey){j[K]===void 0&&(j[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[K].usedTimes++;const ve=j[w.__cacheKey];ve!==void 0&&(j[w.__cacheKey].usedTimes--,ve.usedTimes===0&&M(S)),w.__cacheKey=K,w.__webglTexture=j[K].texture}return B}function ke(w,S,B){return Math.floor(Math.floor(w/B)/S)}function $(w,S,B,Z){const K=w.updateRanges;if(K.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,B,Z,S.data);else{K.sort((re,ue)=>re.start-ue.start);let ve=0;for(let re=1;re<K.length;re++){const ue=K[ve],Ue=K[re],we=ue.start+ue.count,ce=ke(Ue.start,S.width,4),Ve=ke(ue.start,S.width,4);Ue.start<=we+1&&ce===Ve&&ke(Ue.start+Ue.count-1,S.width,4)===ce?ue.count=Math.max(ue.count,Ue.start+Ue.count-ue.start):(++ve,K[ve]=Ue)}K.length=ve+1;const se=r.getParameter(r.UNPACK_ROW_LENGTH),Ae=r.getParameter(r.UNPACK_SKIP_PIXELS),he=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let re=0,ue=K.length;re<ue;re++){const Ue=K[re],we=Math.floor(Ue.start/4),ce=Math.ceil(Ue.count/4),Ve=we%S.width,U=Math.floor(we/S.width),ie=ce,oe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),t.texSubImage2D(r.TEXTURE_2D,0,Ve,U,ie,oe,B,Z,S.data)}w.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ae),r.pixelStorei(r.UNPACK_SKIP_ROWS,he)}}function ae(w,S,B){let Z=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=r.TEXTURE_3D);const j=ot(w,S),K=S.source;t.bindTexture(Z,w.__webglTexture,r.TEXTURE0+B);const ve=n.get(K);if(K.version!==ve.__version||j===!0){t.activeTexture(r.TEXTURE0+B);const se=ft.getPrimaries(ft.workingColorSpace),Ae=S.colorSpace===tr?null:ft.getPrimaries(S.colorSpace),he=S.colorSpace===tr||se===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let re=g(S.image,!1,i.maxTextureSize);re=$e(S,re);const ue=s.convert(S.format,S.colorSpace),Ue=s.convert(S.type);let we=E(S.internalFormat,ue,Ue,S.colorSpace,S.isVideoTexture);Le(Z,S);let ce;const Ve=S.mipmaps,U=S.isVideoTexture!==!0,ie=ve.__version===void 0||j===!0,oe=K.dataReady,pe=A(S,re);if(S.isDepthTexture)we=v(S.format===Ko,S.type),ie&&(U?t.texStorage2D(r.TEXTURE_2D,1,we,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,we,re.width,re.height,0,ue,Ue,null));else if(S.isDataTexture)if(Ve.length>0){U&&ie&&t.texStorage2D(r.TEXTURE_2D,pe,we,Ve[0].width,Ve[0].height);for(let ee=0,J=Ve.length;ee<J;ee++)ce=Ve[ee],U?oe&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,Ue,ce.data):t.texImage2D(r.TEXTURE_2D,ee,we,ce.width,ce.height,0,ue,Ue,ce.data);S.generateMipmaps=!1}else U?(ie&&t.texStorage2D(r.TEXTURE_2D,pe,we,re.width,re.height),oe&&$(S,re,ue,Ue)):t.texImage2D(r.TEXTURE_2D,0,we,re.width,re.height,0,ue,Ue,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,we,Ve[0].width,Ve[0].height,re.depth);for(let ee=0,J=Ve.length;ee<J;ee++)if(ce=Ve[ee],S.format!==ui)if(ue!==null)if(U){if(oe)if(S.layerUpdates.size>0){const Se=Mh(ce.width,ce.height,S.format,S.type);for(const Ne of S.layerUpdates){const ct=ce.data.subarray(Ne*Se/ce.data.BYTES_PER_ELEMENT,(Ne+1)*Se/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,Ne,ce.width,ce.height,1,ue,ct)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,re.depth,ue,ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,we,ce.width,ce.height,re.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?oe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,re.depth,ue,Ue,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,we,ce.width,ce.height,re.depth,0,ue,Ue,ce.data)}else{U&&ie&&t.texStorage2D(r.TEXTURE_2D,pe,we,Ve[0].width,Ve[0].height);for(let ee=0,J=Ve.length;ee<J;ee++)ce=Ve[ee],S.format!==ui?ue!==null?U?oe&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,we,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?oe&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,Ue,ce.data):t.texImage2D(r.TEXTURE_2D,ee,we,ce.width,ce.height,0,ue,Ue,ce.data)}else if(S.isDataArrayTexture)if(U){if(ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,we,re.width,re.height,re.depth),oe)if(S.layerUpdates.size>0){const ee=Mh(re.width,re.height,S.format,S.type);for(const J of S.layerUpdates){const Se=re.data.subarray(J*ee/re.data.BYTES_PER_ELEMENT,(J+1)*ee/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,ue,Ue,Se)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ue,Ue,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,re.width,re.height,re.depth,0,ue,Ue,re.data);else if(S.isData3DTexture)U?(ie&&t.texStorage3D(r.TEXTURE_3D,pe,we,re.width,re.height,re.depth),oe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ue,Ue,re.data)):t.texImage3D(r.TEXTURE_3D,0,we,re.width,re.height,re.depth,0,ue,Ue,re.data);else if(S.isFramebufferTexture){if(ie)if(U)t.texStorage2D(r.TEXTURE_2D,pe,we,re.width,re.height);else{let ee=re.width,J=re.height;for(let Se=0;Se<pe;Se++)t.texImage2D(r.TEXTURE_2D,Se,we,ee,J,0,ue,Ue,null),ee>>=1,J>>=1}}else if(Ve.length>0){if(U&&ie){const ee=ht(Ve[0]);t.texStorage2D(r.TEXTURE_2D,pe,we,ee.width,ee.height)}for(let ee=0,J=Ve.length;ee<J;ee++)ce=Ve[ee],U?oe&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ue,Ue,ce):t.texImage2D(r.TEXTURE_2D,ee,we,ue,Ue,ce);S.generateMipmaps=!1}else if(U){if(ie){const ee=ht(re);t.texStorage2D(r.TEXTURE_2D,pe,we,ee.width,ee.height)}oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ue,Ue,re)}else t.texImage2D(r.TEXTURE_2D,0,we,ue,Ue,re);m(S)&&p(Z),ve.__version=K.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function te(w,S,B){if(S.image.length!==6)return;const Z=ot(w,S),j=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+B);const K=n.get(j);if(j.version!==K.__version||Z===!0){t.activeTexture(r.TEXTURE0+B);const ve=ft.getPrimaries(ft.workingColorSpace),se=S.colorSpace===tr?null:ft.getPrimaries(S.colorSpace),Ae=S.colorSpace===tr||ve===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const he=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,ue=[];for(let J=0;J<6;J++)!he&&!re?ue[J]=g(S.image[J],!0,i.maxCubemapSize):ue[J]=re?S.image[J].image:S.image[J],ue[J]=$e(S,ue[J]);const Ue=ue[0],we=s.convert(S.format,S.colorSpace),ce=s.convert(S.type),Ve=E(S.internalFormat,we,ce,S.colorSpace),U=S.isVideoTexture!==!0,ie=K.__version===void 0||Z===!0,oe=j.dataReady;let pe=A(S,Ue);Le(r.TEXTURE_CUBE_MAP,S);let ee;if(he){U&&ie&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Ve,Ue.width,Ue.height);for(let J=0;J<6;J++){ee=ue[J].mipmaps;for(let Se=0;Se<ee.length;Se++){const Ne=ee[Se];S.format!==ui?we!==null?U?oe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,Ne.width,Ne.height,we,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,Ve,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,Ne.width,Ne.height,we,ce,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,Ve,Ne.width,Ne.height,0,we,ce,Ne.data)}}}else{if(ee=S.mipmaps,U&&ie){ee.length>0&&pe++;const J=ht(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Ve,J.width,J.height)}for(let J=0;J<6;J++)if(re){U?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ue[J].width,ue[J].height,we,ce,ue[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,ue[J].width,ue[J].height,0,we,ce,ue[J].data);for(let Se=0;Se<ee.length;Se++){const ct=ee[Se].image[J].image;U?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,ct.width,ct.height,we,ce,ct.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,Ve,ct.width,ct.height,0,we,ce,ct.data)}}else{U?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,we,ce,ue[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,we,ce,ue[J]);for(let Se=0;Se<ee.length;Se++){const Ne=ee[Se];U?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,we,ce,Ne.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,Ve,we,ce,Ne.image[J])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),K.__version=j.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Ee(w,S,B,Z,j,K){const ve=s.convert(B.format,B.colorSpace),se=s.convert(B.type),Ae=E(B.internalFormat,ve,se,B.colorSpace),he=n.get(S),re=n.get(B);if(re.__renderTarget=S,!he.__hasExternalTextures){const ue=Math.max(1,S.width>>K),Ue=Math.max(1,S.height>>K);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,K,Ae,ue,Ue,S.depth,0,ve,se,null):t.texImage2D(j,K,Ae,ue,Ue,0,ve,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),ge(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,j,re.__webglTexture,0,tt(S)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,j,re.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(w,S,B){if(r.bindRenderbuffer(r.RENDERBUFFER,w),S.depthBuffer){const Z=S.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,K=v(S.stencilBuffer,j),ve=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=tt(S);ge(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,K,S.width,S.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,K,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,K,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,w)}else{const Z=S.textures;for(let j=0;j<Z.length;j++){const K=Z[j],ve=s.convert(K.format,K.colorSpace),se=s.convert(K.type),Ae=E(K.internalFormat,ve,se,K.colorSpace),he=tt(S);B&&ge(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,he,Ae,S.width,S.height):ge(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,Ae,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Fe(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const j=Z.__webglTexture,K=tt(S);if(S.depthTexture.format===$o)ge(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(S.depthTexture.format===Ko)ge(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function rt(w){const S=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=Z}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Z=w.texture.mipmaps;Z&&Z.length>0?Fe(S.__webglFramebuffer[0],w):Fe(S.__webglFramebuffer,w)}else if(B){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=r.createRenderbuffer(),Me(S.__webglDepthbuffer[Z],w,!1);else{const j=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,K)}}else{const Z=w.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Me(S.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,K)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function He(w,S,B){const Z=n.get(w);S!==void 0&&Ee(Z.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&rt(w)}function P(w){const S=w.texture,B=n.get(w),Z=n.get(S);w.addEventListener("dispose",T);const j=w.textures,K=w.isWebGLCubeRenderTarget===!0,ve=j.length>1;if(ve||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=S.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[se]=[];for(let Ae=0;Ae<S.mipmaps.length;Ae++)B.__webglFramebuffer[se][Ae]=r.createFramebuffer()}else B.__webglFramebuffer[se]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)B.__webglFramebuffer[se]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(ve)for(let se=0,Ae=j.length;se<Ae;se++){const he=n.get(j[se]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),o.memory.textures++)}if(w.samples>0&&ge(w)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const Ae=j[se];B.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[se]);const he=s.convert(Ae.format,Ae.colorSpace),re=s.convert(Ae.type),ue=E(Ae.internalFormat,he,re,Ae.colorSpace,w.isXRRenderTarget===!0),Ue=tt(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,ue,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,B.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Me(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Le(r.TEXTURE_CUBE_MAP,S);for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)Ee(B.__webglFramebuffer[se][Ae],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae);else Ee(B.__webglFramebuffer[se],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let se=0,Ae=j.length;se<Ae;se++){const he=j[se],re=n.get(he);let ue=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,re.__webglTexture),Le(ue,he),Ee(B.__webglFramebuffer,w,he,r.COLOR_ATTACHMENT0+se,ue,0),m(he)&&p(ue)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),Le(se,S),S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)Ee(B.__webglFramebuffer[Ae],w,S,r.COLOR_ATTACHMENT0,se,Ae);else Ee(B.__webglFramebuffer,w,S,r.COLOR_ATTACHMENT0,se,0);m(S)&&p(se),t.unbindTexture()}w.depthBuffer&&rt(w)}function Ge(w){const S=w.textures;for(let B=0,Z=S.length;B<Z;B++){const j=S[B];if(m(j)){const K=b(w),ve=n.get(j).__webglTexture;t.bindTexture(K,ve),p(K),t.unbindTexture()}}}const ye=[],qe=[];function F(w){if(w.samples>0){if(ge(w)===!1){const S=w.textures,B=w.width,Z=w.height;let j=r.COLOR_BUFFER_BIT;const K=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(w),se=S.length>1;if(se)for(let he=0;he<S.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Ae=w.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let he=0;he<S.length;he++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const re=n.get(S[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,B,Z,0,0,B,Z,j,r.NEAREST),l===!0&&(ye.length=0,qe.length=0,ye.push(r.COLOR_ATTACHMENT0+he),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ye.push(K),qe.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,qe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let he=0;he<S.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const re=n.get(S[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function tt(w){return Math.min(i.maxSamples,w.samples)}function ge(w){const S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function We(w){const S=o.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function $e(w,S){const B=w.colorSpace,Z=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Js&&B!==tr&&(ft.getTransfer(B)===gt?(Z!==ui||j!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function ht(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=z,this.rebindTextures=He,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ge}function JS(r,e){function t(n,i=tr){let s;const o=ft.getTransfer(i);if(n===Vi)return r.UNSIGNED_BYTE;if(n===df)return r.UNSIGNED_SHORT_4_4_4_4;if(n===pf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Wd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Vd)return r.BYTE;if(n===Gd)return r.SHORT;if(n===qo)return r.UNSIGNED_SHORT;if(n===hf)return r.INT;if(n===ts)return r.UNSIGNED_INT;if(n===Fi)return r.FLOAT;if(n===oa)return r.HALF_FLOAT;if(n===Xd)return r.ALPHA;if(n===qd)return r.RGB;if(n===ui)return r.RGBA;if(n===$o)return r.DEPTH_COMPONENT;if(n===Ko)return r.DEPTH_STENCIL;if(n===Yd)return r.RED;if(n===mf)return r.RED_INTEGER;if(n===$d)return r.RG;if(n===_f)return r.RG_INTEGER;if(n===gf)return r.RGBA_INTEGER;if(n===el||n===tl||n===nl||n===il)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===el)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===el)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===il)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lu||n===cu||n===uu||n===fu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===lu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hu||n===du||n===pu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===hu||n===du)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===pu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mu||n===_u||n===gu||n===vu||n===xu||n===Su||n===Mu||n===yu||n===Eu||n===Tu||n===bu||n===Au||n===wu||n===Ru)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===mu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_u)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Su)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Au)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ru)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rl||n===Cu||n===Pu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===rl)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kd||n===Du||n===Lu||n===Uu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===rl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Du)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class _p extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const QS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new _p(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mr({vertexShader:QS,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oi(new Bl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nM extends ao{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,_=null;const g=new tM,m={},p=t.getContextAttributes();let b=null,E=null;const v=[],A=[],R=new vt;let T=null;const D=new Qn;D.viewport=new Bt;const M=new Qn;M.viewport=new Bt;const x=[D,M],C=new yg;let O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=v[$];return ae===void 0&&(ae=new _c,v[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=v[$];return ae===void 0&&(ae=new _c,v[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=v[$];return ae===void 0&&(ae=new _c,v[$]=ae),ae.getHandSpace()};function H($){const ae=A.indexOf($.inputSource);if(ae===-1)return;const te=v[ae];te!==void 0&&(te.update($.inputSource,$.frame,c||o),te.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",X);for(let $=0;$<v.length;$++){const ae=A[$];ae!==null&&(A[$]=null,v[$].disconnect(ae))}O=null,k=null,g.reset();for(const $ in m)delete m[$];e.setRenderTarget(b),h=null,d=null,f=null,i=null,E=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(i,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Ee=null,Me=null;p.depth&&(Me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?Ko:$o,Ee=p.stencil?Yo:ts);const Fe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};d=f.createProjectionLayer(Fe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new ns(d.textureWidth,d.textureHeight,{format:ui,type:Vi,depthTexture:new up(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new ns(h.framebufferWidth,h.framebufferHeight,{format:ui,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X($){for(let ae=0;ae<$.removed.length;ae++){const te=$.removed[ae],Ee=A.indexOf(te);Ee>=0&&(A[Ee]=null,v[Ee].disconnect(te))}for(let ae=0;ae<$.added.length;ae++){const te=$.added[ae];let Ee=A.indexOf(te);if(Ee===-1){for(let Fe=0;Fe<v.length;Fe++)if(Fe>=A.length){A.push(te),Ee=Fe;break}else if(A[Fe]===null){A[Fe]=te,Ee=Fe;break}if(Ee===-1)break}const Me=v[Ee];Me&&Me.connect(te)}}const G=new q,z=new q;function ne($,ae,te){G.setFromMatrixPosition(ae.matrixWorld),z.setFromMatrixPosition(te.matrixWorld);const Ee=G.distanceTo(z),Me=ae.projectionMatrix.elements,Fe=te.projectionMatrix.elements,rt=Me[14]/(Me[10]-1),He=Me[14]/(Me[10]+1),P=(Me[9]+1)/Me[5],Ge=(Me[9]-1)/Me[5],ye=(Me[8]-1)/Me[0],qe=(Fe[8]+1)/Fe[0],F=rt*ye,tt=rt*qe,ge=Ee/(-ye+qe),We=ge*-ye;if(ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(We),$.translateZ(ge),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Me[10]===-1)$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const $e=rt+ge,ht=He+ge,w=F-We,S=tt+(Ee-We),B=P*He/ht*$e,Z=Ge*He/ht*$e;$.projectionMatrix.makePerspective(w,S,B,Z,$e,ht),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function L($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ae=$.near,te=$.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(te=g.depthFar)),C.near=M.near=D.near=ae,C.far=M.far=D.far=te,(O!==C.near||k!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),O=C.near,k=C.far),C.layers.mask=$.layers.mask|6,D.layers.mask=C.layers.mask&3,M.layers.mask=C.layers.mask&5;const Ee=$.parent,Me=C.cameras;L(C,Ee);for(let Fe=0;Fe<Me.length;Fe++)L(Me[Fe],Ee);Me.length===2?ne(C,D,M):C.projectionMatrix.copy(D.projectionMatrix),fe($,C,Ee)};function fe($,ae,te){te===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(te.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Iu*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function($){return m[$]};let Le=null;function ot($,ae){if(u=ae.getViewerPose(c||o),_=ae,u!==null){const te=u.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let Ee=!1;te.length!==C.cameras.length&&(C.cameras.length=0,Ee=!0);for(let He=0;He<te.length;He++){const P=te[He];let Ge=null;if(h!==null)Ge=h.getViewport(P);else{const qe=f.getViewSubImage(d,P);Ge=qe.viewport,He===0&&(e.setRenderTargetTextures(E,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(E))}let ye=x[He];ye===void 0&&(ye=new Qn,ye.layers.enable(He),ye.viewport=new Bt,x[He]=ye),ye.matrix.fromArray(P.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(P.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),He===0&&(C.matrix.copy(ye.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ee===!0&&C.cameras.push(ye)}const Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&f){const He=f.getDepthInformation(te[0]);He&&He.isValid&&He.texture&&g.init(He,i.renderState)}if(Me&&Me.includes("camera-access")&&(e.state.unbindTexture(),f))for(let He=0;He<te.length;He++){const P=te[He].camera;if(P){let Ge=m[P];Ge||(Ge=new _p,m[P]=Ge);const ye=f.getCameraImage(P);Ge.sourceTexture=ye}}}for(let te=0;te<v.length;te++){const Ee=A[te],Me=v[te];Ee!==null&&Me!==void 0&&Me.update(Ee,ae,c||o)}Le&&Le($,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),_=null}const ke=new fp;ke.setAnimationLoop(ot),this.setAnimationLoop=function($){Le=$},this.dispose=function(){}}}const Rr=new Gi,iM=new Wt;function rM(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sp(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),E=b.envMap,v=b.envMapRotation;E&&(m.envMap.value=E,Rr.copy(v),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),m.envMapRotation.value.setFromMatrix4(iM.makeRotationFromEuler(Rr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sM(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const v=E.program;n.uniformBlockBinding(b,v)}function c(b,E){let v=i[b.id];v===void 0&&(_(b),v=u(b),i[b.id]=v,b.addEventListener("dispose",m));const A=E.program;n.updateUBOMapping(b,A);const R=e.render.frame;s[b.id]!==R&&(d(b),s[b.id]=R)}function u(b){const E=f();b.__bindingPointIndex=E;const v=r.createBuffer(),A=b.__size,R=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,v),v}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const E=i[b.id],v=b.uniforms,A=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let R=0,T=v.length;R<T;R++){const D=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,x=D.length;M<x;M++){const C=D[M];if(h(C,R,M,A)===!0){const O=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let H=0;for(let Y=0;Y<k.length;Y++){const X=k[Y],G=g(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,O+H,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,H),H+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(b,E,v,A){const R=b.value,T=E+"_"+v;if(A[T]===void 0)return typeof R=="number"||typeof R=="boolean"?A[T]=R:A[T]=R.clone(),!0;{const D=A[T];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return A[T]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function _(b){const E=b.uniforms;let v=0;const A=16;for(let T=0,D=E.length;T<D;T++){const M=Array.isArray(E[T])?E[T]:[E[T]];for(let x=0,C=M.length;x<C;x++){const O=M[x],k=Array.isArray(O.value)?O.value:[O.value];for(let H=0,Y=k.length;H<Y;H++){const X=k[H],G=g(X),z=v%A,ne=z%G.boundary,L=z+ne;v+=ne,L!==0&&A-L<G.storage&&(v+=A-L),O.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=G.storage}}}const R=v%A;return R>0&&(v+=A-R),b.__size=v,b.__cache={},this}function g(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function p(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class oM{constructor(e={}){const{canvas:t=V_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const b=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=Jn;let R=0,T=0,D=null,M=-1,x=null;const C=new Bt,O=new Bt;let k=null;const H=new _t(0);let Y=0,X=t.width,G=t.height,z=1,ne=null,L=null;const fe=new Bt(0,0,X,G),Le=new Bt(0,0,X,G);let ot=!1;const ke=new lp;let $=!1,ae=!1;const te=new Wt,Ee=new q,Me=new Bt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function He(){return D===null?z:1}let P=n;function Ge(y,I){return t.getContext(y,I)}try{const y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ff}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",ee,!1),P===null){const I="webgl2";if(P=Ge(I,y),P===null)throw Ge(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ye,qe,F,tt,ge,We,$e,ht,w,S,B,Z,j,K,ve,se,Ae,he,re,ue,Ue,we,ce,Ve;function U(){ye=new _x(P),ye.init(),we=new JS(P,ye),qe=new cx(P,ye,e,we),F=new ZS(P,ye),qe.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),tt=new xx(P),ge=new OS,We=new jS(P,ye,F,ge,qe,we,tt),$e=new fx(v),ht=new mx(v),w=new bg(P),ce=new ax(P,w),S=new gx(P,w,tt,ce),B=new Mx(P,S,w,tt),re=new Sx(P,qe,We),se=new ux(ge),Z=new FS(v,$e,ht,ye,qe,ce,se),j=new rM(v,ge),K=new zS,ve=new XS(ye),he=new ox(v,$e,ht,F,B,h,l),Ae=new $S(v,B,qe),Ve=new sM(P,tt,qe,F),ue=new lx(P,ye,tt),Ue=new vx(P,ye,tt),tt.programs=Z.programs,v.capabilities=qe,v.extensions=ye,v.properties=ge,v.renderLists=K,v.shadowMap=Ae,v.state=F,v.info=tt}U();const ie=new nM(v,P);this.xr=ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=ye.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ye.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(X,G,!1))},this.getSize=function(y){return y.set(X,G)},this.setSize=function(y,I,V=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,G=I,t.width=Math.floor(y*z),t.height=Math.floor(I*z),V===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(X*z,G*z).floor()},this.setDrawingBufferSize=function(y,I,V){X=y,G=I,z=V,t.width=Math.floor(y*V),t.height=Math.floor(I*V),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(fe)},this.setViewport=function(y,I,V,W){y.isVector4?fe.set(y.x,y.y,y.z,y.w):fe.set(y,I,V,W),F.viewport(C.copy(fe).multiplyScalar(z).round())},this.getScissor=function(y){return y.copy(Le)},this.setScissor=function(y,I,V,W){y.isVector4?Le.set(y.x,y.y,y.z,y.w):Le.set(y,I,V,W),F.scissor(O.copy(Le).multiplyScalar(z).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(y){F.setScissorTest(ot=y)},this.setOpaqueSort=function(y){ne=y},this.setTransparentSort=function(y){L=y},this.getClearColor=function(y){return y.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,V=!0){let W=0;if(y){let N=!1;if(D!==null){const Q=D.texture.format;N=Q===gf||Q===_f||Q===mf}if(N){const Q=D.texture.type,le=Q===Vi||Q===ts||Q===qo||Q===Yo||Q===df||Q===pf,Te=he.getClearColor(),xe=he.getClearAlpha(),Ie=Te.r,Pe=Te.g,Ce=Te.b;le?(_[0]=Ie,_[1]=Pe,_[2]=Ce,_[3]=xe,P.clearBufferuiv(P.COLOR,0,_)):(g[0]=Ie,g[1]=Pe,g[2]=Ce,g[3]=xe,P.clearBufferiv(P.COLOR,0,g))}else W|=P.COLOR_BUFFER_BIT}I&&(W|=P.DEPTH_BUFFER_BIT),V&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),he.dispose(),K.dispose(),ve.dispose(),ge.dispose(),$e.dispose(),ht.dispose(),B.dispose(),ce.dispose(),Ve.dispose(),Z.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ye),ie.removeEventListener("sessionend",de),Oe.stop()};function oe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=tt.autoReset,I=Ae.enabled,V=Ae.autoUpdate,W=Ae.needsUpdate,N=Ae.type;U(),tt.autoReset=y,Ae.enabled=I,Ae.autoUpdate=V,Ae.needsUpdate=W,Ae.type=N}function ee(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function J(y){const I=y.target;I.removeEventListener("dispose",J),Se(I)}function Se(y){Ne(y),ge.remove(y)}function Ne(y){const I=ge.get(y).programs;I!==void 0&&(I.forEach(function(V){Z.releaseProgram(V)}),y.isShaderMaterial&&Z.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,V,W,N,Q){I===null&&(I=Fe);const le=N.isMesh&&N.matrixWorld.determinant()<0,Te=pt(y,I,V,W,N);F.setMaterial(W,le);let xe=V.index,Ie=1;if(W.wireframe===!0){if(xe=S.getWireframeAttribute(V),xe===void 0)return;Ie=2}const Pe=V.drawRange,Ce=V.attributes.position;let Ke=Pe.start*Ie,st=(Pe.start+Pe.count)*Ie;Q!==null&&(Ke=Math.max(Ke,Q.start*Ie),st=Math.min(st,(Q.start+Q.count)*Ie)),xe!==null?(Ke=Math.max(Ke,0),st=Math.min(st,xe.count)):Ce!=null&&(Ke=Math.max(Ke,0),st=Math.min(st,Ce.count));const Ut=st-Ke;if(Ut<0||Ut===1/0)return;ce.setup(N,W,Te,V,xe);let bt,St=ue;if(xe!==null&&(bt=w.get(xe),St=Ue,St.setIndex(bt)),N.isMesh)W.wireframe===!0?(F.setLineWidth(W.wireframeLinewidth*He()),St.setMode(P.LINES)):St.setMode(P.TRIANGLES);else if(N.isLine){let Be=W.linewidth;Be===void 0&&(Be=1),F.setLineWidth(Be*He()),N.isLineSegments?St.setMode(P.LINES):N.isLineLoop?St.setMode(P.LINE_LOOP):St.setMode(P.LINE_STRIP)}else N.isPoints?St.setMode(P.POINTS):N.isSprite&&St.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))St.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Be=N._multiDrawStarts,Rt=N._multiDrawCounts,ut=N._multiDrawCount,Ln=xe?w.get(xe).bytesPerElement:1,cs=ge.get(W).currentProgram.getUniforms();for(let Un=0;Un<ut;Un++)cs.setValue(P,"_gl_DrawID",Un),St.render(Be[Un]/Ln,Rt[Un])}else if(N.isInstancedMesh)St.renderInstances(Ke,Ut,N.count);else if(V.isInstancedBufferGeometry){const Be=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Rt=Math.min(V.instanceCount,Be);St.renderInstances(Ke,Ut,Rt)}else St.render(Ke,Ut)};function ct(y,I,V){y.transparent===!0&&y.side===Ii&&y.forceSinglePass===!1?(y.side=En,y.needsUpdate=!0,Ft(y,I,V),y.side=pr,y.needsUpdate=!0,Ft(y,I,V),y.side=Ii):Ft(y,I,V)}this.compile=function(y,I,V=null){V===null&&(V=y),p=ve.get(V),p.init(I),E.push(p),V.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),y!==V&&y.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const W=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const Te=Q[le];ct(Te,V,N),W.add(Te)}else ct(Q,V,N),W.add(Q)}),p=E.pop(),W},this.compileAsync=function(y,I,V=null){const W=this.compile(y,I,V);return new Promise(N=>{function Q(){if(W.forEach(function(le){ge.get(le).currentProgram.isReady()&&W.delete(le)}),W.size===0){N(y);return}setTimeout(Q,10)}ye.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let _e=null;function Re(y){_e&&_e(y)}function Ye(){Oe.stop()}function de(){Oe.start()}const Oe=new fp;Oe.setAnimationLoop(Re),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(y){_e=y,ie.setAnimationLoop(y),y===null?Oe.stop():Oe.start()},ie.addEventListener("sessionstart",Ye),ie.addEventListener("sessionend",de),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(I),I=ie.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,I,D),p=ve.get(y,E.length),p.init(I),E.push(p),te.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ke.setFromProjectionMatrix(te,xi,I.reversedDepth),ae=this.localClippingEnabled,$=se.init(this.clippingPlanes,ae),m=K.get(y,b.length),m.init(),b.push(m),ie.enabled===!0&&ie.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&De(Q,I,-1/0,v.sortObjects)}De(y,I,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ne,L),rt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,rt&&he.addToRenderList(m,y),this.info.render.frame++,$===!0&&se.beginShadows();const V=p.state.shadowsArray;Ae.render(V,y,I),$===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,N=m.transmissive;if(p.setupLights(),I.isArrayCamera){const Q=I.cameras;if(N.length>0)for(let le=0,Te=Q.length;le<Te;le++){const xe=Q[le];Nt(W,N,y,xe)}rt&&he.render(y);for(let le=0,Te=Q.length;le<Te;le++){const xe=Q[le];Xe(m,y,xe,xe.viewport)}}else N.length>0&&Nt(W,N,y,I),rt&&he.render(y),Xe(m,y,I);D!==null&&T===0&&(We.updateMultisampleRenderTarget(D),We.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(v,y,I),ce.resetDefaultState(),M=-1,x=null,E.pop(),E.length>0?(p=E[E.length-1],$===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function De(y,I,V,W){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ke.intersectsSprite(y)){W&&Me.setFromMatrixPosition(y.matrixWorld).applyMatrix4(te);const le=B.update(y),Te=y.material;Te.visible&&m.push(y,le,Te,V,Me.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ke.intersectsObject(y))){const le=B.update(y),Te=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Me.copy(y.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Me.copy(le.boundingSphere.center)),Me.applyMatrix4(y.matrixWorld).applyMatrix4(te)),Array.isArray(Te)){const xe=le.groups;for(let Ie=0,Pe=xe.length;Ie<Pe;Ie++){const Ce=xe[Ie],Ke=Te[Ce.materialIndex];Ke&&Ke.visible&&m.push(y,le,Ke,V,Me.z,Ce)}}else Te.visible&&m.push(y,le,Te,V,Me.z,null)}}const Q=y.children;for(let le=0,Te=Q.length;le<Te;le++)De(Q[le],I,V,W)}function Xe(y,I,V,W){const N=y.opaque,Q=y.transmissive,le=y.transparent;p.setupLightsView(V),$===!0&&se.setGlobalState(v.clippingPlanes,V),W&&F.viewport(C.copy(W)),N.length>0&&je(N,I,V),Q.length>0&&je(Q,I,V),le.length>0&&je(le,I,V),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Nt(y,I,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new ns(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?oa:Vi,minFilter:Vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const Q=p.state.transmissionRenderTarget[W.id],le=W.viewport||C;Q.setSize(le.z*v.transmissionResolutionScale,le.w*v.transmissionResolutionScale);const Te=v.getRenderTarget(),xe=v.getActiveCubeFace(),Ie=v.getActiveMipmapLevel();v.setRenderTarget(Q),v.getClearColor(H),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),rt&&he.render(V);const Pe=v.toneMapping;v.toneMapping=ur;const Ce=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),$===!0&&se.setGlobalState(v.clippingPlanes,W),je(y,V,W),We.updateMultisampleRenderTarget(Q),We.updateRenderTargetMipmap(Q),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let st=0,Ut=I.length;st<Ut;st++){const bt=I[st],St=bt.object,Be=bt.geometry,Rt=bt.material,ut=bt.group;if(Rt.side===Ii&&St.layers.test(W.layers)){const Ln=Rt.side;Rt.side=En,Rt.needsUpdate=!0,At(St,V,W,Be,Rt,ut),Rt.side=Ln,Rt.needsUpdate=!0,Ke=!0}}Ke===!0&&(We.updateMultisampleRenderTarget(Q),We.updateRenderTargetMipmap(Q))}v.setRenderTarget(Te,xe,Ie),v.setClearColor(H,Y),Ce!==void 0&&(W.viewport=Ce),v.toneMapping=Pe}function je(y,I,V){const W=I.isScene===!0?I.overrideMaterial:null;for(let N=0,Q=y.length;N<Q;N++){const le=y[N],Te=le.object,xe=le.geometry,Ie=le.group;let Pe=le.material;Pe.allowOverride===!0&&W!==null&&(Pe=W),Te.layers.test(V.layers)&&At(Te,I,V,xe,Pe,Ie)}}function At(y,I,V,W,N,Q){y.onBeforeRender(v,I,V,W,N,Q),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(v,I,V,W,y,Q),N.transparent===!0&&N.side===Ii&&N.forceSinglePass===!1?(N.side=En,N.needsUpdate=!0,v.renderBufferDirect(V,I,W,N,y,Q),N.side=pr,N.needsUpdate=!0,v.renderBufferDirect(V,I,W,N,y,Q),N.side=Ii):v.renderBufferDirect(V,I,W,N,y,Q),y.onAfterRender(v,I,V,W,N,Q)}function Ft(y,I,V){I.isScene!==!0&&(I=Fe);const W=ge.get(y),N=p.state.lights,Q=p.state.shadowsArray,le=N.state.version,Te=Z.getParameters(y,N.state,Q,I,V),xe=Z.getProgramCacheKey(Te);let Ie=W.programs;W.environment=y.isMeshStandardMaterial?I.environment:null,W.fog=I.fog,W.envMap=(y.isMeshStandardMaterial?ht:$e).get(y.envMap||W.environment),W.envMapRotation=W.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Ie===void 0&&(y.addEventListener("dispose",J),Ie=new Map,W.programs=Ie);let Pe=Ie.get(xe);if(Pe!==void 0){if(W.currentProgram===Pe&&W.lightsStateVersion===le)return xt(y,Te),Pe}else Te.uniforms=Z.getUniforms(y),y.onBeforeCompile(Te,v),Pe=Z.acquireProgram(Te,xe),Ie.set(xe,Pe),W.uniforms=Te.uniforms;const Ce=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ce.clippingPlanes=se.uniform),xt(y,Te),W.needsLights=Tt(y),W.lightsStateVersion=le,W.needsLights&&(Ce.ambientLightColor.value=N.state.ambient,Ce.lightProbe.value=N.state.probe,Ce.directionalLights.value=N.state.directional,Ce.directionalLightShadows.value=N.state.directionalShadow,Ce.spotLights.value=N.state.spot,Ce.spotLightShadows.value=N.state.spotShadow,Ce.rectAreaLights.value=N.state.rectArea,Ce.ltc_1.value=N.state.rectAreaLTC1,Ce.ltc_2.value=N.state.rectAreaLTC2,Ce.pointLights.value=N.state.point,Ce.pointLightShadows.value=N.state.pointShadow,Ce.hemisphereLights.value=N.state.hemi,Ce.directionalShadowMap.value=N.state.directionalShadowMap,Ce.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ce.spotShadowMap.value=N.state.spotShadowMap,Ce.spotLightMatrix.value=N.state.spotLightMatrix,Ce.spotLightMap.value=N.state.spotLightMap,Ce.pointShadowMap.value=N.state.pointShadowMap,Ce.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Pe,W.uniformsList=null,Pe}function Et(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=sl.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function xt(y,I){const V=ge.get(y);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function pt(y,I,V,W,N){I.isScene!==!0&&(I=Fe),We.resetTextureUnits();const Q=I.fog,le=W.isMeshStandardMaterial?I.environment:null,Te=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Js,xe=(W.isMeshStandardMaterial?ht:$e).get(W.envMap||le),Ie=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!V.morphAttributes.position,Ke=!!V.morphAttributes.normal,st=!!V.morphAttributes.color;let Ut=ur;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ut=v.toneMapping);const bt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,St=bt!==void 0?bt.length:0,Be=ge.get(W),Rt=p.state.lights;if($===!0&&(ae===!0||y!==x)){const fn=y===x&&W.id===M;se.setState(W,y,fn)}let ut=!1;W.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Rt.state.version||Be.outputColorSpace!==Te||N.isBatchedMesh&&Be.batching===!1||!N.isBatchedMesh&&Be.batching===!0||N.isBatchedMesh&&Be.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Be.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Be.instancing===!1||!N.isInstancedMesh&&Be.instancing===!0||N.isSkinnedMesh&&Be.skinning===!1||!N.isSkinnedMesh&&Be.skinning===!0||N.isInstancedMesh&&Be.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Be.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Be.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Be.instancingMorph===!1&&N.morphTexture!==null||Be.envMap!==xe||W.fog===!0&&Be.fog!==Q||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==se.numPlanes||Be.numIntersection!==se.numIntersection)||Be.vertexAlphas!==Ie||Be.vertexTangents!==Pe||Be.morphTargets!==Ce||Be.morphNormals!==Ke||Be.morphColors!==st||Be.toneMapping!==Ut||Be.morphTargetsCount!==St)&&(ut=!0):(ut=!0,Be.__version=W.version);let Ln=Be.currentProgram;ut===!0&&(Ln=Ft(W,I,N));let cs=!1,Un=!1,co=!1;const Ct=Ln.getUniforms(),$n=Be.uniforms;if(F.useProgram(Ln.program)&&(cs=!0,Un=!0,co=!0),W.id!==M&&(M=W.id,Un=!0),cs||x!==y){F.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ct.setValue(P,"projectionMatrix",y.projectionMatrix),Ct.setValue(P,"viewMatrix",y.matrixWorldInverse);const xn=Ct.map.cameraPosition;xn!==void 0&&xn.setValue(P,Ee.setFromMatrixPosition(y.matrixWorld)),qe.logarithmicDepthBuffer&&Ct.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ct.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,Un=!0,co=!0)}if(N.isSkinnedMesh){Ct.setOptional(P,N,"bindMatrix"),Ct.setOptional(P,N,"bindMatrixInverse");const fn=N.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Ct.setValue(P,"boneTexture",fn.boneTexture,We))}N.isBatchedMesh&&(Ct.setOptional(P,N,"batchingTexture"),Ct.setValue(P,"batchingTexture",N._matricesTexture,We),Ct.setOptional(P,N,"batchingIdTexture"),Ct.setValue(P,"batchingIdTexture",N._indirectTexture,We),Ct.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&Ct.setValue(P,"batchingColorTexture",N._colorsTexture,We));const Kn=V.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&re.update(N,V,Ln),(Un||Be.receiveShadow!==N.receiveShadow)&&(Be.receiveShadow=N.receiveShadow,Ct.setValue(P,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&($n.envMap.value=xe,$n.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&I.environment!==null&&($n.envMapIntensity.value=I.environmentIntensity),Un&&(Ct.setValue(P,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&Dn($n,co),Q&&W.fog===!0&&j.refreshFogUniforms($n,Q),j.refreshMaterialUniforms($n,W,z,G,p.state.transmissionRenderTarget[y.id]),sl.upload(P,Et(Be),$n,We)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(sl.upload(P,Et(Be),$n,We),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ct.setValue(P,"center",N.center),Ct.setValue(P,"modelViewMatrix",N.modelViewMatrix),Ct.setValue(P,"normalMatrix",N.normalMatrix),Ct.setValue(P,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const fn=W.uniformsGroups;for(let xn=0,ql=fn.length;xn<ql;xn++){const yr=fn[xn];Ve.update(yr,Ln),Ve.bind(yr,Ln)}}return Ln}function Dn(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Tt(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,I,V){const W=ge.get(y);W.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),ge.get(y.texture).__webglTexture=I,ge.get(y.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:V,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const V=ge.get(y);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0};const un=P.createFramebuffer();this.setRenderTarget=function(y,I=0,V=0){D=y,R=I,T=V;let W=!0,N=null,Q=!1,le=!1;if(y){const xe=ge.get(y);if(xe.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(xe.__webglFramebuffer===void 0)We.setupRenderTarget(y);else if(xe.__hasExternalTextures)We.rebindTextures(y,ge.get(y.texture).__webglTexture,ge.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ce=y.depthTexture;if(xe.__boundDepthTexture!==Ce){if(Ce!==null&&ge.has(Ce)&&(y.width!==Ce.image.width||y.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(y)}}const Ie=y.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(le=!0);const Pe=ge.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?N=Pe[I][V]:N=Pe[I],Q=!0):y.samples>0&&We.useMultisampledRTT(y)===!1?N=ge.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?N=Pe[V]:N=Pe,C.copy(y.viewport),O.copy(y.scissor),k=y.scissorTest}else C.copy(fe).multiplyScalar(z).floor(),O.copy(Le).multiplyScalar(z).floor(),k=ot;if(V!==0&&(N=un),F.bindFramebuffer(P.FRAMEBUFFER,N)&&W&&F.drawBuffers(y,N),F.viewport(C),F.scissor(O),F.setScissorTest(k),Q){const xe=ge.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,xe.__webglTexture,V)}else if(le){const xe=I;for(let Ie=0;Ie<y.textures.length;Ie++){const Pe=ge.get(y.textures[Ie]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ie,Pe.__webglTexture,V,xe)}}else if(y!==null&&V!==0){const xe=ge.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xe.__webglTexture,V)}M=-1},this.readRenderTargetPixels=function(y,I,V,W,N,Q,le,Te=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ge.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&le!==void 0&&(xe=xe[le]),xe){F.bindFramebuffer(P.FRAMEBUFFER,xe);try{const Ie=y.textures[Te],Pe=Ie.format,Ce=Ie.type;if(!qe.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-W&&V>=0&&V<=y.height-N&&(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Te),P.readPixels(I,V,W,N,we.convert(Pe),we.convert(Ce),Q))}finally{const Ie=D!==null?ge.get(D).__webglFramebuffer:null;F.bindFramebuffer(P.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(y,I,V,W,N,Q,le,Te=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ge.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&le!==void 0&&(xe=xe[le]),xe)if(I>=0&&I<=y.width-W&&V>=0&&V<=y.height-N){F.bindFramebuffer(P.FRAMEBUFFER,xe);const Ie=y.textures[Te],Pe=Ie.format,Ce=Ie.type;if(!qe.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ke),P.bufferData(P.PIXEL_PACK_BUFFER,Q.byteLength,P.STREAM_READ),y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Te),P.readPixels(I,V,W,N,we.convert(Pe),we.convert(Ce),0);const st=D!==null?ge.get(D).__webglFramebuffer:null;F.bindFramebuffer(P.FRAMEBUFFER,st);const Ut=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await G_(P,Ut,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ke),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Q),P.deleteBuffer(Ke),P.deleteSync(Ut),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,V=0){const W=Math.pow(2,-V),N=Math.floor(y.image.width*W),Q=Math.floor(y.image.height*W),le=I!==null?I.x:0,Te=I!==null?I.y:0;We.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,le,Te,N,Q),F.unbindTexture()};const Yn=P.createFramebuffer(),Xt=P.createFramebuffer();this.copyTextureToTexture=function(y,I,V=null,W=null,N=0,Q=null){Q===null&&(N!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let le,Te,xe,Ie,Pe,Ce,Ke,st,Ut;const bt=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(V!==null)le=V.max.x-V.min.x,Te=V.max.y-V.min.y,xe=V.isBox3?V.max.z-V.min.z:1,Ie=V.min.x,Pe=V.min.y,Ce=V.isBox3?V.min.z:0;else{const Kn=Math.pow(2,-N);le=Math.floor(bt.width*Kn),Te=Math.floor(bt.height*Kn),y.isDataArrayTexture?xe=bt.depth:y.isData3DTexture?xe=Math.floor(bt.depth*Kn):xe=1,Ie=0,Pe=0,Ce=0}W!==null?(Ke=W.x,st=W.y,Ut=W.z):(Ke=0,st=0,Ut=0);const St=we.convert(I.format),Be=we.convert(I.type);let Rt;I.isData3DTexture?(We.setTexture3D(I,0),Rt=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(We.setTexture2DArray(I,0),Rt=P.TEXTURE_2D_ARRAY):(We.setTexture2D(I,0),Rt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const ut=P.getParameter(P.UNPACK_ROW_LENGTH),Ln=P.getParameter(P.UNPACK_IMAGE_HEIGHT),cs=P.getParameter(P.UNPACK_SKIP_PIXELS),Un=P.getParameter(P.UNPACK_SKIP_ROWS),co=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,bt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,bt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ie),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ce);const Ct=y.isDataArrayTexture||y.isData3DTexture,$n=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const Kn=ge.get(y),fn=ge.get(I),xn=ge.get(Kn.__renderTarget),ql=ge.get(fn.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,xn.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,ql.__webglFramebuffer);for(let yr=0;yr<xe;yr++)Ct&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ge.get(y).__webglTexture,N,Ce+yr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ge.get(I).__webglTexture,Q,Ut+yr)),P.blitFramebuffer(Ie,Pe,le,Te,Ke,st,le,Te,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||ge.has(y)){const Kn=ge.get(y),fn=ge.get(I);F.bindFramebuffer(P.READ_FRAMEBUFFER,Yn),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,Xt);for(let xn=0;xn<xe;xn++)Ct?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Kn.__webglTexture,N,Ce+xn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Kn.__webglTexture,N),$n?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fn.__webglTexture,Q,Ut+xn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fn.__webglTexture,Q),N!==0?P.blitFramebuffer(Ie,Pe,le,Te,Ke,st,le,Te,P.COLOR_BUFFER_BIT,P.NEAREST):$n?P.copyTexSubImage3D(Rt,Q,Ke,st,Ut+xn,Ie,Pe,le,Te):P.copyTexSubImage2D(Rt,Q,Ke,st,Ie,Pe,le,Te);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else $n?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Rt,Q,Ke,st,Ut,le,Te,xe,St,Be,bt.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(Rt,Q,Ke,st,Ut,le,Te,xe,St,bt.data):P.texSubImage3D(Rt,Q,Ke,st,Ut,le,Te,xe,St,Be,bt):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Q,Ke,st,le,Te,St,Be,bt.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Q,Ke,st,bt.width,bt.height,St,bt.data):P.texSubImage2D(P.TEXTURE_2D,Q,Ke,st,le,Te,St,Be,bt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ut),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ln),P.pixelStorei(P.UNPACK_SKIP_PIXELS,cs),P.pixelStorei(P.UNPACK_SKIP_ROWS,Un),P.pixelStorei(P.UNPACK_SKIP_IMAGES,co),Q===0&&I.generateMipmaps&&P.generateMipmap(Rt),F.unbindTexture()},this.copyTextureToTexture3D=function(y,I,V=null,W=null,N=0){return zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,I,V,W,N)},this.initRenderTarget=function(y){ge.get(y).__webglFramebuffer===void 0&&We.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?We.setTextureCube(y,0):y.isData3DTexture?We.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?We.setTexture2DArray(y,0):We.setTexture2D(y,0),F.unbindTexture()},this.resetState=function(){R=0,T=0,D=null,F.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}function Li(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function gp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zo={duration:.5,overwrite:!1,delay:0},Sf,tn,wt,ni=1e8,yt=1/ni,Ou=Math.PI*2,aM=Ou/4,lM=0,vp=Math.sqrt,cM=Math.cos,uM=Math.sin,Qt=function(e){return typeof e=="string"},It=function(e){return typeof e=="function"},Wi=function(e){return typeof e=="number"},Mf=function(e){return typeof e>"u"},Ei=function(e){return typeof e=="object"},An=function(e){return e!==!1},yf=function(){return typeof window<"u"},Oa=function(e){return It(e)||Qt(e)},xp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,fM=/random\([^)]+\)/g,hM=/,\s*/g,qh=/(?:-?\.?\d|\.)+/gi,Sp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Us=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Tc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Mp=/[+-]=-?[.\d]+/,dM=/[^,'"\[\]\s]+/gi,pM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Dt,di,Bu,Ef,Xn={},Sl={},yp,Ep=function(e){return(Sl=eo(e,Xn))&&Pn},Tf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},jo=function(e,t){return!t&&console.warn(e)},Tp=function(e,t){return e&&(Xn[e]=t)&&Sl&&(Sl[e]=t)||Xn},Jo=function(){return 0},mM={suppressEvents:!0,isStart:!0,kill:!1},ol={suppressEvents:!0,kill:!1},_M={suppressEvents:!0},bf={},fr=[],zu={},bp,Bn={},bc={},Yh=30,al=[],Af="",wf=function(e){var t=e[0],n,i;if(Ei(t)||It(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=al.length;i--&&!al[i].targetTest(t););n=al[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Yp(e[i],n)))||e.splice(i,1);return e},qr=function(e){return e._gsap||wf(ii(e))[0]._gsap},Ap=function(e,t,n){return(n=e[t])&&It(n)?e[t]():Mf(n)&&e.getAttribute&&e.getAttribute(t)||n},wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ot=function(e){return Math.round(e*1e5)/1e5||0},Pt=function(e){return Math.round(e*1e7)/1e7||0},Hs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},gM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ml=function(){var e=fr.length,t=fr.slice(0),n,i;for(zu={},fr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Rf=function(e){return!!(e._initted||e._startAt||e.add)},wp=function(e,t,n,i){fr.length&&!tn&&Ml(),e.render(t,n,!!(tn&&t<0&&Rf(e))),fr.length&&!tn&&Ml()},Rp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(dM).length<2?t:Qt(e)?e.trim():e},Cp=function(e){return e},qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},vM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},eo=function(e,t){for(var n in t)e[n]=t[n];return e},$h=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ei(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},yl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Do=function(e){var t=e.parent||Dt,n=e.keyframes?vM(cn(e.keyframes)):qn;if(An(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},xM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Pp=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},kl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},_r=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Yr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},SM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ku=function(e,t,n,i){return e._startAt&&(tn?e._startAt.revert(ol):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},MM=function r(e){return!e||e._ts&&r(e.parent)},Kh=function(e){return e._repeat?to(e._tTime,e=e.duration()+e._rDelay)*e:0},to=function(e,t){var n=Math.floor(e=Pt(e/t));return e&&n===e?n-1:n},El=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Hl=function(e){return e._end=Pt(e._start+(e._tDur/Math.abs(e._ts||e._rts||yt)||0))},Vl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Pt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Hl(e),n._dirty||Yr(n,e)),e},Dp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=El(e.rawTime(),t),(!t._dur||ha(0,t.totalDuration(),n)-t._tTime>yt)&&t.render(n,!0)),Yr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-yt}},gi=function(e,t,n,i){return t.parent&&_r(t),t._start=Pt((Wi(n)?n:n||e!==Dt?jn(e,n,t):e._time)+t._delay),t._end=Pt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Pp(e,t,"_first","_last",e._sort?"_start":0),Hu(t)||(e._recent=t),i||Dp(e,t),e._ts<0&&Vl(e,e._tTime),e},Lp=function(e,t){return(Xn.ScrollTrigger||Tf("scrollTrigger",t))&&Xn.ScrollTrigger.create(t,e)},Up=function(e,t,n,i,s){if(Pf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&bp!==kn.frame)return fr.push(e),e._lazy=[s,i],1},yM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Hu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},EM=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&yM(e)&&!(!e._initted&&Hu(e))||(e._ts<0||e._dp._ts<0)&&!Hu(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=ha(0,e._tDur,t),u=to(l,a),e._yoyo&&u&1&&(o=1-o),u!==to(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||tn||i||e._zTime===yt||!t&&e._zTime){if(!e._initted&&Up(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?yt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&ku(e,t,n,!0),e._onUpdate&&!n&&Vn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Vn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&_r(e,1),!n&&!tn&&(Vn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},TM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},no=function(e,t,n,i){var s=e._repeat,o=Pt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Pt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Vl(e,e._tTime=e._tDur*a),e.parent&&Hl(e),n||Yr(e.parent,e),e},Zh=function(e){return e instanceof yn?Yr(e):no(e,e._dur)},bM={_start:0,endTime:Jo,totalDuration:Jo},jn=function r(e,t,n){var i=e.labels,s=e._recent||bM,o=e.duration()>=ni?s.endTime(!1):e._dur,a,l,c;return Qt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Lo=function(e,t,n){var i=Wi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=An(l.vars.inherit)&&l.parent;o.immediateRender=An(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Vt(t[0],o,t[s+1])},Mr=function(e,t){return e||e===0?t(e):t},ha=function(e,t,n){return n<e?e:n>t?t:n},an=function(e,t){return!Qt(e)||!(t=pM.exec(e))?"":t[1]},AM=function(e,t,n){return Mr(n,function(i){return ha(e,t,i)})},Vu=[].slice,Ip=function(e,t){return e&&Ei(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ei(e[0]))&&!e.nodeType&&e!==di},wM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Qt(i)&&!t||Ip(i,1)?(s=n).push.apply(s,ii(i)):n.push(i)})||n},ii=function(e,t,n){return wt&&!t&&wt.selector?wt.selector(e):Qt(e)&&!n&&(Bu||!io())?Vu.call((t||Ef).querySelectorAll(e),0):cn(e)?wM(e,n):Ip(e)?Vu.call(e,0):e?[e]:[]},Gu=function(e){return e=ii(e)[0]||jo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ii(t,n.querySelectorAll?n:n===e?jo("Invalid scope")||Ef.createElement("div"):e)}},Np=function(e){return e.sort(function(){return .5-Math.random()})},Fp=function(e){if(It(e))return e;var t=Ei(e)?e:{each:e},n=$r(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return Qt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(d,h,_){var g=(_||t).length,m=o[g],p,b,E,v,A,R,T,D,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,ni])[1],!M){for(T=-ni;T<(T=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],p=l?Math.min(M,g)*u-.5:i%M,b=M===ni?0:l?g*f/M-.5:i/M|0,T=0,D=ni,R=0;R<g;R++)E=R%M-p,v=b-(R/M|0),m[R]=A=c?Math.abs(c==="y"?v:E):vp(E*E+v*v),A>T&&(T=A),A<D&&(D=A);i==="random"&&Np(m),m.max=T-D,m.min=D,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=an(t.amount||t.each)||0,n=n&&g<0?kM(n):n}return g=(m[d]-m.min)/m.max||0,Pt(m.b+(n?n(g):g)*m.v)+m.u}},Wu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Pt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Wi(n)?0:an(n))}},Op=function(e,t){var n=cn(e),i,s;return!n&&Ei(e)&&(i=n=e.radius||ni,e.values?(e=ii(e.values),(s=!Wi(e[0]))&&(i*=i)):e=Wu(e.increment)),Mr(t,n?It(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ni,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-a,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!i||c<=i?e[u]:o,s||u===o||Wi(o)?u:u+an(o)}:Wu(e))},Bp=function(e,t,n,i){return Mr(cn(e)?!t:n===!0?!!(n=0):!i,function(){return cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},RM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},CM=function(e,t){return function(n){return e(parseFloat(n))+(t||an(n))}},PM=function(e,t,n){return kp(e,t,0,1,n)},zp=function(e,t,n){return Mr(n,function(i){return e[~~t(i)]})},DM=function r(e,t,n){var i=t-e;return cn(e)?zp(e,r(0,e.length),t):Mr(n,function(s){return(i+(s-e)%i)%i+e})},LM=function r(e,t,n){var i=t-e,s=i*2;return cn(e)?zp(e,r(0,e.length-1),t):Mr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Qo=function(e){return e.replace(fM,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(hM);return Bp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},kp=function(e,t,n,i,s){var o=t-e,a=i-n;return Mr(s,function(l){return n+((l-e)/o*a||0)})},UM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=Qt(e),a={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(cn(e)&&!cn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(_){_*=f;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else i||(e=eo(cn(e)?[]:{},e));if(!u){for(l in t)Cf.call(a,e,l,"get",t[l]);s=function(_){return Uf(_,a)||(o?e.p:e)}}}return Mr(n,s)},jh=function(e,t,n){var i=e.labels,s=ni,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Vn=function(e,t,n){var i=e.vars,s=i[t],o=wt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&fr.length&&Ml(),a&&(wt=a),u=l?s.apply(c,l):s.call(c),wt=o,u},Eo=function(e){return _r(e),e.scrollTrigger&&e.scrollTrigger.kill(!!tn),e.progress()<1&&Vn(e,"onInterrupt"),e},Is,Hp=[],Vp=function(e){if(e)if(e=!e.name&&e.default||e,yf()||e.headless){var t=e.name,n=It(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Jo,render:Uf,add:Cf,kill:ZM,modifier:KM,rawVars:0},o={targetTest:0,get:0,getSetter:Lf,aliases:{},register:0};if(io(),e!==i){if(Bn[t])return;qn(i,qn(yl(e,s),o)),eo(i.prototype,eo(s,yl(e,o))),Bn[i.prop=t]=i,e.targetTest&&(al.push(i),bf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Tp(t,i),e.register&&e.register(Pn,i,Rn)}else Hp.push(e)},Mt=255,To={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},Ac=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mt+.5|0},Gp=function(e,t,n){var i=e?Wi(e)?[e>>16,e>>8&Mt,e&Mt]:0:To.black,s,o,a,l,c,u,f,d,h,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),To[e])i=To[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Mt,i&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(qh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ac(l+1/3,s,o),i[1]=Ac(l,s,o),i[2]=Ac(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Sp),n&&i.length<4&&(i[3]=1),i}else i=e.match(qh)||To.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Mt,o=i[1]/Mt,a=i[2]/Mt,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(o-a)/h+(o<a?6:0):f===o?(a-s)/h+2:(s-o)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Wp=function(e){var t=[],n=[],i=-1;return e.split(hr).forEach(function(s){var o=s.match(Us)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Jh=function(e,t,n){var i="",s=(e+i).match(hr),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=Gp(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Wp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(hr,"1").split(Us),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(hr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},hr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in To)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),IM=/hsl[a]?\(/,Xp=function(e){var t=e.join(" "),n;if(hr.lastIndex=0,hr.test(t))return n=IM.test(t),e[1]=Jh(e[1],n),e[0]=Jh(e[0],n,Wp(e[1])),!0},ea,kn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,d,h,_=function g(m){var p=r()-i,b=m===!0,E,v,A,R;if((p>e||p<0)&&(n+=p-t),i+=p,A=i-n,E=A-o,(E>0||b)&&(R=++f.frame,d=A-f.time*1e3,f.time=A=A/1e3,o+=E+(E>=s?4:s-E),v=1),b||(l=c(g)),v)for(h=0;h<a.length;h++)a[h](A,d,R,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){yp&&(!Bu&&yf()&&(di=Bu=window,Ef=di.document||{},Xn.gsap=Pn,(di.gsapVersions||(di.gsapVersions=[])).push(Pn.version),Ep(Sl||di.GreenSockGlobals||!di.gsap&&di||{}),Hp.forEach(Vp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},ea=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ea=0,c=Jo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,b){var E=p?function(v,A,R,T){m(v,A,R,T),f.remove(E)}:m;return f.remove(m),a[b?"unshift":"push"](E),io(),E},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},f})(),io=function(){return!ea&&kn.wake()},lt={},NM=/^[\d.\-M][\d.\-,\s]/,FM=/["']/g,OM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(FM,"").trim():+c,i=l.substr(a+1).trim();return t},BM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},zM=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[OM(t[1])]:BM(e).split(",").map(Rp)):lt._CE&&NM.test(e)?lt._CE("",e):n},kM=function(e){return function(t){return 1-e(1-t)}},$r=function(e,t){return e&&(It(e)?e:lt[e]||zM(e))||t},ls=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return wn(e,function(a){lt[a]=Xn[a]=s,lt[o=a.toLowerCase()]=n;for(var l in s)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=s[l]}),s},qp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},wc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Ou*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*uM((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:qp(a);return s=Ou/s,l.config=function(c,u){return r(e,c,u)},l},Rc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:qp(n);return i.config=function(s){return r(e,s)},i};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ls(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;ls("Elastic",wc("in"),wc("out"),wc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ls("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ls("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ls("Circ",function(r){return-(vp(1-r*r)-1)});ls("Sine",function(r){return r===1?1:-cM(r*aM)+1});ls("Back",Rc("in"),Rc("out"),Rc());lt.SteppedEase=lt.steps=Xn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-yt;return function(a){return((i*ha(0,o,a)|0)+s)*n}}};Zo.ease=lt["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Af+=r+","+r+"Params,"});var Yp=function(e,t){this.id=lM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ap,this.set=t?t.getSetter:Lf},ta=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,no(this,+t.duration,1,1),this.data=t.data,wt&&(this._ctx=wt,wt.data.push(this)),ea||kn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,no(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(io(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Vl(this,n),!s._dp||s.parent||Dp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&gi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===yt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Kh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Kh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?to(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-yt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?El(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-yt?0:this._rts,this.totalTime(ha(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Hl(this),SM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(io(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==yt&&(this._tTime-=yt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Pt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&gi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?El(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=_M);var i=tn;return tn=n,Rf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),tn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Zh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Zh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(jn(this,n),An(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,An(i)),this._dur||(this._zTime=-yt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-yt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-yt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-yt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=It(n)?n:Cp,l=function(){var u=i.then;i.then=null,s&&s(),It(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Eo(this)},r})();qn(ta.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-yt,_prom:0,_ps:!1,_rts:1});var yn=(function(r){gp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=An(n.sortChildren),Dt&&gi(n.parent||Dt,Li(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Lp(Li(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Lo(0,arguments,this),this},t.from=function(i,s,o){return Lo(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Lo(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Do(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Vt(i,s,jn(this,o),1),this},t.call=function(i,s,o){return gi(this,Vt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Vt(i,o,jn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Do(o).immediateRender=An(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,Do(a).immediateRender=An(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Pt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,h,_,g,m,p,b,E,v,A,R,T;if(this!==Dt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,v=this._start,E=this._ts,p=!E,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=Pt(u%m),u===l?(g=this._repeat,d=c):(A=Pt(u/m),g=~~A,g&&g===A&&(d=c,g--),d>c&&(d=c)),A=to(this._tTime,m),!a&&this._tTime&&A!==g&&this._tTime-A*m-this._dur<=0&&(A=g),R&&g&1&&(d=c-d,T=1),g!==A&&!this._lock){var D=R&&A&1,M=D===(R&&g&1);if(g<A&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Pt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Vn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,A=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=TM(this,Pt(a),Pt(d)),b&&(u-=d-(d=b._start))),this._tTime=u,this._time=d,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!A&&(Vn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(h=this._first;h;){if(_=h._next,(h._act||d>=h._start)&&h._ts&&b!==h){if(h.parent!==this)return this.render(i,s,o);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,o),d!==this._time||!this._ts&&!p){b=0,_&&(u+=this._zTime=-yt);break}}h=_}else{h=this._last;for(var x=i<0?i:d;h;){if(_=h._prev,(h._act||x<=h._end)&&h._ts&&b!==h){if(h.parent!==this)return this.render(i,s,o);if(h.render(h._ts>0?(x-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(x-h._start)*h._ts,s,o||tn&&Rf(h)),d!==this._time||!this._ts&&!p){b=0,_&&(u+=this._zTime=x?-yt:yt);break}}h=_}}if(b&&!s&&(this.pause(),b.render(d>=a?0:-yt)._zTime=d>=a?1:-1,this._ts))return this._start=v,Hl(this),this.render(i,s,o);this._onUpdate&&!s&&Vn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&_r(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Vn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Wi(s)||(s=jn(this,s,i)),!(i instanceof ta)){if(cn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Qt(i))return this.addLabel(i,s);if(It(i))i=Vt.delayedCall(0,i);else return this}return this!==i?gi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Vt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Qt(i)?this.removeLabel(i):It(i)?this.killTweensOf(i):(i.parent===this&&kl(this,i),i===this._recent&&(this._recent=this._last),Yr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pt(kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=jn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Vt.delayedCall(0,s||Jo,o);return a.data="isPause",this._hasPause=1,gi(this,a,jn(this,i))},t.removePause=function(i){var s=this._first;for(i=jn(this,i);s;)s._start===i&&s.data==="isPause"&&_r(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)rr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ii(i),l=this._first,c=Wi(s),u;l;)l instanceof Vt?gM(l._targets,a)&&(c?(!rr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=jn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,_=Vt.to(o,qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||yt,onStart:function(){if(o.pause(),!h){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&no(_,m,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,f||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,qn({startAt:{time:jn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),jh(this,jn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),jh(this,jn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+yt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Pt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Yr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ni,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Pt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;no(o,o===Dt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Dt._ts&&(wp(Dt,El(i,Dt)),bp=kn.frame),kn.frame>=Yh){Yh+=Wn.autoSleep||120;var s=Dt._first;if((!s||!s._ts)&&Wn.autoSleep&&kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||kn.sleep()}}},e})(ta);qn(yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var HM=function(e,t,n,i,s,o,a){var l=new Rn(this._pt,e,t,0,1,Qp,null,s),c=0,u=0,f,d,h,_,g,m,p,b;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Qo(i)),o&&(b=[n,i],o(b,e,t),n=b[0],i=b[1]),d=n.match(Tc)||[];f=Tc.exec(i);)_=f[0],g=i.substring(c,f.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Hs(m,_)-m:parseFloat(_)-m,m:h&&h<4?Math.round:0},c=Tc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Mp.test(i)||p)&&(l.e=0),this._pt=l,l},Cf=function(e,t,n,i,s,o,a,l,c,u){It(i)&&(i=i(s||0,e,o));var f=e[t],d=n!=="get"?n:It(f)?c?e[t.indexOf("set")||!It(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=It(f)?c?qM:jp:Df,_;if(Qt(i)&&(~i.indexOf("random(")&&(i=Qo(i)),i.charAt(1)==="="&&(_=Hs(d,i)+(an(d)||0),(_||_===0)&&(i=_))),!u||d!==i||Xu)return!isNaN(d*i)&&i!==""?(_=new Rn(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?$M:Jp,0,h),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&Tf(t,i),HM.call(this,e,t,d,i,h,l||Wn.stringFilter,c))},VM=function(e,t,n,i,s){if(It(e)&&(e=Uo(e,s,t,n,i)),!Ei(e)||e.style&&e.nodeType||cn(e)||xp(e))return Qt(e)?Uo(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Uo(e[a],s,t,n,i);return o},$p=function(e,t,n,i,s,o){var a,l,c,u;if(Bn[e]&&(a=new Bn[e]).init(s,a.rawVars?t[e]:VM(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Rn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Is))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},rr,Xu,Pf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,d=i.keyframes,h=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:m,E=e._overwrite==="auto"&&!Sf,v=e.timeline,A=i.easeReverse||f,R,T,D,M,x,C,O,k,H,Y,X,G,z;if(v&&(!d||!s)&&(s="none"),e._ease=$r(s,Zo.ease),e._rEase=A&&($r(A)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||d&&!i.stagger){if(k=m[0]?qr(m[0]).harness:0,G=k&&i[k.prop],R=yl(i,bf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!h?g.render(-1,!0):g.revert(u&&_?ol:mM),g._lazy=0),o){if(_r(e._startAt=Vt.set(m,qn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&An(l),startAt:null,delay:0,onUpdate:c&&function(){return Vn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn||!a&&!h)&&e._startAt.revert(ol),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),D=qn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&An(l),immediateRender:a,stagger:0,parent:p},R),G&&(D[k.prop]=G),_r(e._startAt=Vt.set(m,D)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn?e._startAt.revert(ol):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,yt,yt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&An(l)||l&&!_,T=0;T<m.length;T++){if(x=m[T],O=x._gsap||wf(m)[T]._gsap,e._ptLookup[T]=Y={},zu[O.id]&&fr.length&&Ml(),X=b===m?T:b.indexOf(x),k&&(H=new k).init(x,G||R,e,X,b)!==!1&&(e._pt=M=new Rn(e._pt,x,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(ne){Y[ne]=M}),H.priority&&(C=1)),!k||G)for(D in R)Bn[D]&&(H=$p(D,R,e,X,x,b))?H.priority&&(C=1):Y[D]=M=Cf.call(e,x,D,"get",R[D],X,b,0,i.stringFilter);e._op&&e._op[T]&&e.kill(x,e._op[T]),E&&e._pt&&(rr=e,Dt.killTweensOf(x,Y,e.globalTime(t)),z=!e.parent,rr=0),e._pt&&l&&(zu[O.id]=1)}C&&em(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,d&&t<=0&&v.render(ni,!0,!0)},GM=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Xu=1,e.vars[t]="+=0",Pf(e,a),Xu=0,l?jo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Ot(n)+an(f.e)),f.b&&(f.b=u.s+an(f.b))},WM=function(e,t){var n=e[0]?qr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=eo({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},XM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(cn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Uo=function(e,t,n,i,s){return It(e)?e.call(t,n,i,s):Qt(e)&&~e.indexOf("random(")?Qo(e):e},Kp=Af+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Zp={};wn(Kp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Zp[r]=1});var Vt=(function(r){gp(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Do(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||Dt,b=(cn(n)||xp(n)?Wi(n[0]):"length"in i)?[n]:ii(n),E,v,A,R,T,D,M,x;if(a._targets=b.length?wf(b):jo("GSAP target "+n+" not found. https://gsap.com",!Wn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,_||d||Oa(c)||Oa(u)){i=a.vars;var C=i.easeReverse||i.yoyoEase;if(E=a.timeline=new yn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:b}),E.kill(),E.parent=E._dp=Li(a),E._start=0,d||Oa(c)||Oa(u)){if(R=b.length,M=d&&Fp(d),Ei(d))for(T in d)~Kp.indexOf(T)&&(x||(x={}),x[T]=d[T]);for(v=0;v<R;v++)A=yl(i,Zp),A.stagger=0,C&&(A.easeReverse=C),x&&eo(A,x),D=b[v],A.duration=+Uo(c,Li(a),v,D,b),A.delay=(+Uo(u,Li(a),v,D,b)||0)-a._delay,!d&&R===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),E.to(D,A,M?M(v,D,b):0),E._ease=lt.none;E.duration()?c=u=0:a.timeline=0}else if(_){Do(qn(E.vars.defaults,{ease:"none"})),E._ease=$r(_.ease||i.ease||"none");var O=0,k,H,Y;if(cn(_))_.forEach(function(X){return E.to(b,X,">")}),E.duration();else{A={};for(T in _)T==="ease"||T==="easeEach"||XM(T,_[T],A,_.easeEach);for(T in A)for(k=A[T].sort(function(X,G){return X.t-G.t}),O=0,v=0;v<k.length;v++)H=k[v],Y={ease:H.e,duration:(H.t-(v?k[v-1].t:0))/100*c},Y[T]=H.v,E.to(b,Y,O),O+=Y.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return h===!0&&!Sf&&(rr=Li(a),Dt.killTweensOf(b),rr=0),gi(p,Li(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!_&&a._start===Pt(p._time)&&An(f)&&MM(Li(a))&&p.data!=="nested")&&(a._tTime=-yt,a.render(Math.max(0,-u)||0)),m&&Lp(Li(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-yt&&!u?l:i<yt?0:i,d,h,_,g,m,p,b,E;if(!c)EM(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,E=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(d=Pt(f%g),f===l?(_=this._repeat,d=c):(m=Pt(f/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(d=c-d),m=to(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=f,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Pt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Up(this,u?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=d<a;if(v!==this._inv){var A=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(v?-1:1)/A:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(d/c);if(this._from&&(this.ratio=b=1-b),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(Vn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(b,h.d),h=h._next;E&&E.render(i<0?i:E._dur*E._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ku(this,i,s,o),Vn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Vn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&ku(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&_r(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Vn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){ea||kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Pf(this,c),u=this._ease(c/this._dur),GM(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Vl(this,0),this.parent||Pp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Eo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!tn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,rr&&rr.vars.overwrite!==!0)._first||Eo(this),this.parent&&o!==this.timeline.totalDuration()&&no(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ii(i):a,c=this._ptLookup,u=this._pt,f,d,h,_,g,m,p;if((!s||s==="all")&&xM(a,l))return s==="all"&&(this._pt=0),Eo(this);for(f=this._op=this._op||[],s!=="all"&&(Qt(s)&&(g={},wn(s,function(b){return g[b]=1}),s=g),s=WM(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,_=d,h={}):(h=f[p]=f[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&kl(this,m,"_pt"),delete d[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&u&&Eo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Lo(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Lo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Dt.killTweensOf(i,s,o)},e})(ta);qn(Vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(r){Vt[r]=function(){var e=new yn,t=Vu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Df=function(e,t,n){return e[t]=n},jp=function(e,t,n){return e[t](n)},qM=function(e,t,n,i){return e[t](i.fp,n)},YM=function(e,t,n){return e.setAttribute(t,n)},Lf=function(e,t){return It(e[t])?jp:Mf(e[t])&&e.setAttribute?YM:Df},Jp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},$M=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Qp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Uf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},KM=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},ZM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?kl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},jM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},em=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Rn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Jp,this.d=l||this,this.set=c||Df,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=jM,this.m=n,this.mt=s,this.tween=i},r})();wn(Af+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return bf[r]=1});Xn.TweenMax=Xn.TweenLite=Vt;Xn.TimelineLite=Xn.TimelineMax=yn;Dt=new yn({sortChildren:!1,defaults:Zo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Wn.stringFilter=Xp;var Kr=[],ll={},JM=[],Qh=0,QM=0,Cc=function(e){return(ll[e]||JM).map(function(t){return t()})},qu=function(){var e=Date.now(),t=[];e-Qh>2&&(Cc("matchMediaInit"),Kr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=di.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Cc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Qh=e,Cc("matchMedia"))},tm=(function(){function r(t,n){this.selector=n&&Gu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=QM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){It(n)&&(s=i,i=n,n=It);var o=this,a=function(){var c=wt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Gu(s)),wt=o,f=i.apply(o,arguments),It(f)&&o._r.push(f),wt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===It?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=wt;wt=null,n(this),wt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Vt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof yn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Vt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Kr.length;o--;)Kr[o].id===this.id&&Kr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),ey=(function(){function r(t){this.contexts=[],this.scope=t,wt&&wt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ei(n)||(n={matches:n});var o=new tm(0,s||this.scope),a=o.conditions={},l,c,u;wt&&!o.selector&&(o.selector=wt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=di.matchMedia(n[c]),l&&(Kr.indexOf(o)<0&&Kr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(qu):l.addEventListener("change",qu)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Tl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Vp(i)})},timeline:function(e){return new yn(e)},getTweensOf:function(e,t){return Dt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Qt(e)&&(e=ii(e)[0]);var s=qr(e||{}).get,o=n?Cp:Rp;return n==="native"&&(n=""),e&&(t?o((Bn[t]&&Bn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Bn[a]&&Bn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ii(e),e.length>1){var i=e.map(function(u){return Pn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=Bn[t],a=qr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Is._pt=0,f.init(e,n?u+n:u,Is,0,[e]),f.render(1,f),Is._pt&&Uf(1,Is)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Pn.to(e,qn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=$r(e.ease,Zo.ease)),$h(Zo,e||{})},config:function(e){return $h(Wn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Bn[a]&&!Xn[a]&&jo(t+" effect requires "+a+" plugin.")}),bc[t]=function(a,l,c){return n(ii(a),qn(l||{},s),c)},o&&(yn.prototype[t]=function(a,l,c){return this.add(bc[t](a,Ei(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=$r(t)},parseEase:function(e,t){return arguments.length?$r(e,t):lt},getById:function(e){return Dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new yn(e),i,s;for(n.smoothChildTiming=An(e.smoothChildTiming),Dt.remove(n),n._dp=0,n._time=n._tTime=Dt._time,i=Dt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Vt&&i.vars.onComplete===i._targets[0]))&&gi(n,i,i._start-i._delay),i=s;return gi(Dt,n,0),n},context:function(e,t){return e?new tm(e,t):wt},matchMedia:function(e){return new ey(e)},matchMediaRefresh:function(){return Kr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||qu()},addEventListener:function(e,t){var n=ll[e]||(ll[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ll[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:DM,wrapYoyo:LM,distribute:Fp,random:Bp,snap:Op,normalize:PM,getUnit:an,clamp:AM,splitColor:Gp,toArray:ii,selector:Gu,mapRange:kp,pipe:RM,unitize:CM,interpolate:UM,shuffle:Np},install:Ep,effects:bc,ticker:kn,updateRoot:yn.updateRoot,plugins:Bn,globalTimeline:Dt,core:{PropTween:Rn,globals:Tp,Tween:Vt,Timeline:yn,Animation:ta,getCache:qr,_removeLinkedListItem:kl,reverting:function(){return tn},context:function(e){return e&&wt&&(wt.data.push(e),e._ctx=wt),wt},suppressOverwrites:function(e){return Sf=e}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Tl[r]=Vt[r]});kn.add(yn.updateRoot);Is=Tl.to({},{duration:0});var ty=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ny=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=ty(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Pc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Qt(s)&&(l={},wn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ny(a,s)}}}},Pn=Tl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)tn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Pc("roundProps",Wu),Pc("modifiers"),Pc("snap",Op))||Tl;Vt.version=yn.version=Pn.version="3.15.0";yp=1;yf()&&io();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;var ed,sr,Vs,If,Gr,td,Nf,iy=function(){return typeof window<"u"},Xi={},Ir=180/Math.PI,Gs=Math.PI/180,Ts=Math.atan2,nd=1e8,Ff=/([A-Z])/g,ry=/(left|right|width|margin|padding|x)/i,sy=/[\s,\(]\S/,Si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ay=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ly=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},cy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},nm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},im=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},uy=function(e,t,n){return e.style[t]=n},fy=function(e,t,n){return e.style.setProperty(t,n)},hy=function(e,t,n){return e._gsap[t]=n},dy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},py=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},my=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Lt="transform",Cn=Lt+"Origin",_y=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Xi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ui(i,a)}):this.tfm[e]=o.x?o[e]:Ui(i,e),e===Cn&&(this.tfm.zOrigin=o.zOrigin);else return Si.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Lt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Cn,t,"")),e=Lt}(s||t)&&this.props.push(e,t,s[e])},rm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},gy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ff,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Nf(),(!s||!s.isStart)&&!n[Lt]&&(rm(n),i.zOrigin&&n[Cn]&&(n[Cn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},sm=function(e,t){var n={target:e,props:[],revert:gy,save:_y};return e._gsap||Pn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},om,$u=function(e,t){var n=sr.createElementNS?sr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):sr.createElement(e);return n&&n.style?n:sr.createElement(e)},Gn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ff,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,ro(t)||t,1)||""},id="O,Moz,ms,Ms,Webkit".split(","),ro=function(e,t,n){var i=t||Gr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(id[o]+e in s););return o<0?null:(o===3?"ms":o>=0?id[o]:"")+e},Ku=function(){iy()&&window.document&&(ed=window,sr=ed.document,Vs=sr.documentElement,Gr=$u("div")||{style:{}},$u("div"),Lt=ro(Lt),Cn=Lt+"Origin",Gr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",om=!!ro("perspective"),Nf=Pn.core.reverting,If=1)},rd=function(e){var t=e.ownerSVGElement,n=$u("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Vs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Vs.removeChild(n),s},sd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},am=function(e){var t,n;try{t=e.getBBox()}catch{t=rd(e),n=1}return t&&(t.width||t.height)||n||(t=rd(e)),t&&!t.width&&!t.x&&!t.y?{x:+sd(e,["x","cx","x1"])||0,y:+sd(e,["y","cy","y1"])||0,width:0,height:0}:t},lm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&am(e))},gr=function(e,t){if(t){var n=e.style,i;t in Xi&&t!==Cn&&(t=Lt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Ff,"-$1").toLowerCase())):n.removeAttribute(t)}},or=function(e,t,n,i,s,o){var a=new Rn(e._pt,t,n,0,1,o?im:nm);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},od={deg:1,rad:1,turn:1},vy={grid:1,flex:1},vr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Gr.style,l=ry.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",h=i==="%",_,g,m,p;if(i===o||!s||od[i]||od[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&lm(e),(h||o==="%")&&(Xi[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Ot(h?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(d?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===sr||!g.appendChild)&&(g=sr.body),m=g._gsap,m&&h&&m.width&&l&&m.time===kn.time&&!m.uncache)return Ot(s/m.width*f);if(h&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=f+i,_=e[u],b?e.style[t]=b:gr(e,t)}else(h||o==="%")&&!vy[Gn(g,"display")]&&(a.position=Gn(e,"position")),g===e&&(a.position="static"),g.appendChild(Gr),_=Gr[u],g.removeChild(Gr),a.position="absolute";return l&&h&&(m=qr(g),m.time=kn.time,m.width=g[u]),Ot(d?_*s/f:_&&s?f/_*s:0)},Ui=function(e,t,n,i){var s;return If||Ku(),t in Si&&t!=="transform"&&(t=Si[t],~t.indexOf(",")&&(t=t.split(",")[0])),Xi[t]&&t!=="transform"?(s=ia(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Al(Gn(e,Cn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=bl[t]&&bl[t](e,t,n)||Gn(e,t)||Ap(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?vr(e,t,s,n)+n:s},xy=function(e,t,n,i){if(!n||n==="none"){var s=ro(t,e,1),o=s&&Gn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Gn(e,"borderTopColor"))}var a=new Rn(this._pt,e.style,t,0,1,Qp),l=0,c=0,u,f,d,h,_,g,m,p,b,E,v,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Gn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Gn(e,t)||i,g?e.style[t]=g:gr(e,t)),u=[n,i],Xp(u),n=u[0],i=u[1],d=n.match(Us)||[],A=i.match(Us)||[],A.length){for(;f=Us.exec(i);)m=f[0],b=i.substring(l,f.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(h=parseFloat(g)||0,v=g.substr((h+"").length),m.charAt(1)==="="&&(m=Hs(h,m)+v),p=parseFloat(m),E=m.substr((p+"").length),l=Us.lastIndex-E.length,E||(E=E||Wn.units[t]||v,l===i.length&&(i+=E,a.e+=E)),v!==E&&(h=vr(e,t,g,E)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:h,c:p-h,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?im:nm;return Mp.test(i)&&(a.e=0),this._pt=a,a},ad={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Sy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=ad[n]||n,t[1]=ad[i]||i,t.join(" ")},My=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Xi[a]&&(l=1,a=a==="transformOrigin"?Cn:Lt),gr(n,a);l&&(gr(n,Lt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ia(n,1),o.uncache=1,rm(i)))}},bl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Rn(e._pt,t,n,0,0,My);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},na=[1,0,0,1,0,0],cm={},um=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ld=function(e){var t=Gn(e,Lt);return um(t)?na:t.substr(7).match(Sp).map(Ot)},Of=function(e,t){var n=e._gsap||qr(e),i=e.style,s=ld(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?na:s):(s===na&&!e.offsetParent&&e!==Vs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Vs.appendChild(e)),s=ld(e),l?i.display=l:gr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Vs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Zu=function(e,t,n,i,s,o){var a=e._gsap,l=s||Of(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,h=l[0],_=l[1],g=l[2],m=l[3],p=l[4],b=l[5],E=t.split(" "),v=parseFloat(E[0])||0,A=parseFloat(E[1])||0,R,T,D,M;n?l!==na&&(T=h*m-_*g)&&(D=v*(m/T)+A*(-g/T)+(g*b-m*p)/T,M=v*(-_/T)+A*(h/T)-(h*b-_*p)/T,v=D,A=M):(R=am(e),v=R.x+(~E[0].indexOf("%")?v/100*R.width:v),A=R.y+(~(E[1]||E[0]).indexOf("%")?A/100*R.height:A)),i||i!==!1&&a.smooth?(p=v-c,b=A-u,a.xOffset=f+(p*h+b*g)-p,a.yOffset=d+(p*_+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Cn]="0px 0px",o&&(or(o,a,"xOrigin",c,v),or(o,a,"yOrigin",u,A),or(o,a,"xOffset",f,a.xOffset),or(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+A)},ia=function(e,t){var n=e._gsap||new Yp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Gn(e,Cn)||"0",u,f,d,h,_,g,m,p,b,E,v,A,R,T,D,M,x,C,O,k,H,Y,X,G,z,ne,L,fe,Le,ot,ke,$;return u=f=d=g=m=p=b=E=v=0,h=_=1,n.svg=!!(e.getCTM&&lm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Lt]!=="none"?l[Lt]:"")),i.scale=i.rotate=i.translate="none"),T=Of(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),Zu(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,R=n.yOrigin||0,T!==na&&(C=T[0],O=T[1],k=T[2],H=T[3],u=Y=T[4],f=X=T[5],T.length===6?(h=Math.sqrt(C*C+O*O),_=Math.sqrt(H*H+k*k),g=C||O?Ts(O,C)*Ir:0,b=k||H?Ts(k,H)*Ir+g:0,b&&(_*=Math.abs(Math.cos(b*Gs))),n.svg&&(u-=A-(A*C+R*k),f-=R-(A*O+R*H))):($=T[6],ot=T[7],L=T[8],fe=T[9],Le=T[10],ke=T[11],u=T[12],f=T[13],d=T[14],D=Ts($,Le),m=D*Ir,D&&(M=Math.cos(-D),x=Math.sin(-D),G=Y*M+L*x,z=X*M+fe*x,ne=$*M+Le*x,L=Y*-x+L*M,fe=X*-x+fe*M,Le=$*-x+Le*M,ke=ot*-x+ke*M,Y=G,X=z,$=ne),D=Ts(-k,Le),p=D*Ir,D&&(M=Math.cos(-D),x=Math.sin(-D),G=C*M-L*x,z=O*M-fe*x,ne=k*M-Le*x,ke=H*x+ke*M,C=G,O=z,k=ne),D=Ts(O,C),g=D*Ir,D&&(M=Math.cos(D),x=Math.sin(D),G=C*M+O*x,z=Y*M+X*x,O=O*M-C*x,X=X*M-Y*x,C=G,Y=z),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),h=Ot(Math.sqrt(C*C+O*O+k*k)),_=Ot(Math.sqrt(X*X+$*$)),D=Ts(Y,X),b=Math.abs(D)>2e-4?D*Ir:0,v=ke?1/(ke<0?-ke:ke):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!um(Gn(e,Lt)),G&&e.setAttribute("transform",G))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(h*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ot(h),n.scaleY=Ot(_),n.rotation=Ot(g)+a,n.rotationX=Ot(m)+a,n.rotationY=Ot(p)+a,n.skewX=b+a,n.skewY=E+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Cn]=Al(c)),n.xOffset=n.yOffset=0,n.force3D=Wn.force3D,n.renderTransform=n.svg?Ey:om?fm:yy,n.uncache=0,n},Al=function(e){return(e=e.split(" "))[0]+" "+e[1]},Dc=function(e,t,n){var i=an(t);return Ot(parseFloat(t)+parseFloat(vr(e,"x",n+"px",i)))+i},yy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,fm(e,t)},Cr="0deg",_o="0px",Pr=") ",fm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,h=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,E=n.zOrigin,v="",A=p==="auto"&&e&&e!==1||p===!0;if(E&&(f!==Cr||u!==Cr)){var R=parseFloat(u)*Gs,T=Math.sin(R),D=Math.cos(R),M;R=parseFloat(f)*Gs,M=Math.cos(R),o=Dc(b,o,T*M*-E),a=Dc(b,a,-Math.sin(R)*-E),l=Dc(b,l,D*M*-E+E)}m!==_o&&(v+="perspective("+m+Pr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||o!==_o||a!==_o||l!==_o)&&(v+=l!==_o||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Pr),c!==Cr&&(v+="rotate("+c+Pr),u!==Cr&&(v+="rotateY("+u+Pr),f!==Cr&&(v+="rotateX("+f+Pr),(d!==Cr||h!==Cr)&&(v+="skew("+d+", "+h+Pr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Pr),b.style[Lt]=v||"translate(0, 0)"},Ey=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,h=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,E=parseFloat(o),v=parseFloat(a),A,R,T,D,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Gs,c*=Gs,A=Math.cos(l)*f,R=Math.sin(l)*f,T=Math.sin(l-c)*-d,D=Math.cos(l-c)*d,c&&(u*=Gs,M=Math.tan(c-u),M=Math.sqrt(1+M*M),T*=M,D*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),A*=M,R*=M)),A=Ot(A),R=Ot(R),T=Ot(T),D=Ot(D)):(A=f,D=d,R=T=0),(E&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(E=vr(h,"x",o,"px"),v=vr(h,"y",a,"px")),(_||g||m||p)&&(E=Ot(E+_-(_*A+g*T)+m),v=Ot(v+g-(_*R+g*D)+p)),(i||s)&&(M=h.getBBox(),E=Ot(E+i/100*M.width),v=Ot(v+s/100*M.height)),M="matrix("+A+","+R+","+T+","+D+","+E+","+v+")",h.setAttribute("transform",M),b&&(h.style[Lt]=M)},Ty=function(e,t,n,i,s){var o=360,a=Qt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ir:1),c=l-i,u=i+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*nd)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*nd)%o-~~(c/o)*o)),e._pt=d=new Rn(e._pt,t,n,i,c,oy),d.e=u,d.u="deg",e._props.push(n),d},cd=function(e,t){for(var n in t)e[n]=t[n];return e},by=function(e,t,n){var i=cd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,d,h,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Lt]=t,a=ia(n,1),gr(n,Lt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Lt],o[Lt]=t,a=ia(n,1),o[Lt]=c);for(l in Xi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=an(c),_=an(u),f=h!==_?vr(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new Rn(e._pt,a,l,f,d-f,Yu),e._pt.u=_||0,e._props.push(l));cd(a,i)};wn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});bl[e>1?"border"+r:r]=function(a,l,c,u,f){var d,h;if(arguments.length<4)return d=o.map(function(_){return Ui(a,_,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},o.forEach(function(_,g){return h[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,h,f)}});var hm={name:"css",register:Ku,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,d,h,_,g,m,p,b,E,v,A,R,T,D,M;If||Ku(),this.styles=this.styles||sm(e),D=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Bn[g]&&$p(g,t,n,i,e,s)))){if(h=typeof u,_=bl[g],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Qo(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",hr.lastIndex=0,hr.test(c)||(m=an(c),p=an(u),p?m!==p&&(c=vr(e,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),D.push(g,0,a[g]);else if(h!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],Qt(c)&&~c.indexOf("random(")&&(c=Qo(c)),an(c+"")||c==="auto"||(c+=Wn.units[g]||an(Ui(e,g))||""),(c+"").charAt(1)==="="&&(c=Ui(e,g))):c=Ui(e,g),d=parseFloat(c),b=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),f=parseFloat(u),g in Si&&(g==="autoAlpha"&&(d===1&&Ui(e,"visibility")==="hidden"&&f&&(d=0),D.push("visibility",0,a.visibility),or(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Si[g],~g.indexOf(",")&&(g=g.split(",")[0]))),E=g in Xi,E){if(this.styles.save(g),M=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Gn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=Gn(e,"perspective"),x?e.style.perspective=x:gr(e,"perspective")}f=parseFloat(u)}if(v||(A=e._gsap,A.renderTransform&&!t.parseTransform||ia(e,t.parseTransform),R=t.smoothOrigin!==!1&&A.smooth,v=this._pt=new Rn(this._pt,a,Lt,0,1,A.renderTransform,A,0,-1),v.dep=1),g==="scale")this._pt=new Rn(this._pt,A,"scaleY",A.scaleY,(b?Hs(A.scaleY,b+f):f)-A.scaleY||0,Yu),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){D.push(Cn,0,a[Cn]),u=Sy(u),A.svg?Zu(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&or(this,A,"zOrigin",A.zOrigin,p),or(this,a,g,Al(c),Al(u)));continue}else if(g==="svgOrigin"){Zu(e,u,1,R,0,this);continue}else if(g in cm){Ty(this,A,g,d,b?Hs(d,b+u):u);continue}else if(g==="smoothOrigin"){or(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){by(this,u,e);continue}}else g in a||(g=ro(g)||g);if(E||(f||f===0)&&(d||d===0)&&!sy.test(u)&&g in a)m=(c+"").substr((d+"").length),f||(f=0),p=an(u)||(g in Wn.units?Wn.units[g]:m),m!==p&&(d=vr(e,g,c,p)),this._pt=new Rn(this._pt,E?A:a,g,d,(b?Hs(d,b+f):f)-d,!E&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?cy:Yu),this._pt.u=p||0,E&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=ly):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=ay);else if(g in a)xy.call(this,e,g,c,b?b+u:u);else if(g in e)this.add(e,g,c||e[g],b?b+u:u,i,s);else if(g!=="parseTransform"){Tf(g,u);continue}E||(g in a?D.push(g,0,a[g]):typeof e[g]=="function"?D.push(g,2,e[g]()):D.push(g,1,c||e[g])),o.push(g)}}T&&em(this)},render:function(e,t){if(t.tween._time||!Nf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ui,aliases:Si,getSetter:function(e,t,n){var i=Si[t];return i&&i.indexOf(",")<0&&(t=i),t in Xi&&t!==Cn&&(e._gsap.x||Ui(e,"x"))?n&&td===n?t==="scale"?dy:hy:(td=n||{})&&(t==="scale"?py:my):e.style&&!Mf(e.style[t])?uy:~t.indexOf("-")?fy:Lf(e,t)},core:{_removeProperty:gr,_getMatrix:Of}};Pn.utils.checkPrefix=ro;Pn.core.getStyleSaver=sm;(function(r,e,t,n){var i=wn(r+","+e+","+t,function(s){Xi[s]=1});wn(e,function(s){Wn.units[s]="deg",cm[s]=1}),Si[i[13]]=r+","+e,wn(n,function(s){var o=s.split(":");Si[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Wn.units[r]="px"});Pn.registerPlugin(hm);var wl=Pn.registerPlugin(hm)||Pn;wl.core.Tween;function Ay(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function wy(r,e,t){return e&&Ay(r.prototype,e),r}var en,cl,Hn,ar,lr,Ws,dm,Nr,Xs,pm,Bi,li,mm,_m=function(){return en||typeof window<"u"&&(en=window.gsap)&&en.registerPlugin&&en},gm=1,Ns=[],it=[],yi=[],Io=Date.now,ju=function(e,t){return t},Ry=function(){var e=Xs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,it),i.push.apply(i,yi),it=n,yi=i,ju=function(o,a){return t[o](a)}},dr=function(e,t){return~yi.indexOf(e)&&yi[yi.indexOf(e)+1][t]},No=function(e){return!!~pm.indexOf(e)},dn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},hn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ba="scrollLeft",za="scrollTop",Ju=function(){return Bi&&Bi.isPressed||it.cache++},Rl=function(e,t){var n=function i(s){if(s||s===0){gm&&(Hn.history.scrollRestoration="manual");var o=Bi&&Bi.isPressed;s=i.v=Math.round(s)||(Bi&&Bi.iOS?1:0),e(s),i.cacheID=it.cache,o&&ju("ss",s)}else(t||it.cache!==i.cacheID||ju("ref"))&&(i.cacheID=it.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},vn={s:Ba,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Rl(function(r){return arguments.length?Hn.scrollTo(r,Yt.sc()):Hn.pageXOffset||ar[Ba]||lr[Ba]||Ws[Ba]||0})},Yt={s:za,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:vn,sc:Rl(function(r){return arguments.length?Hn.scrollTo(vn.sc(),r):Hn.pageYOffset||ar[za]||lr[za]||Ws[za]||0})},Mn=function(e,t){return(t&&t._ctx&&t._ctx.selector||en.utils.toArray)(e)[0]||(typeof e=="string"&&en.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Cy=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},xr=function(e,t){var n=t.s,i=t.sc;No(e)&&(e=ar.scrollingElement||lr);var s=it.indexOf(e),o=i===Yt.sc?1:2;!~s&&(s=it.push(e)-1),it[s+o]||dn(e,"scroll",Ju);var a=it[s+o],l=a||(it[s+o]=Rl(dr(e,n),!0)||(No(e)?i:Rl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=en.getProperty(e,"scrollBehavior")==="smooth"),l},Qu=function(e,t,n){var i=e,s=e,o=Io(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=Io();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(_){var g=a,m=s,p=Io();return(_||_===0)&&_!==i&&u(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:f,getVelocity:d}},go=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ud=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},vm=function(){Xs=en.core.globals().ScrollTrigger,Xs&&Xs.core&&Ry()},xm=function(e){return en=e||_m(),!cl&&en&&typeof document<"u"&&document.body&&(Hn=window,ar=document,lr=ar.documentElement,Ws=ar.body,pm=[Hn,ar,lr,Ws],en.utils.clamp,mm=en.core.context||function(){},Nr="onpointerenter"in Ws?"pointer":"mouse",dm=zt.isTouch=Hn.matchMedia&&Hn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Hn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,li=zt.eventTypes=("ontouchstart"in lr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in lr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return gm=0},500),cl=1),Xs||vm(),cl};vn.op=Yt;it.cache=0;var zt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){cl||xm(en)||console.warn("Please gsap.registerPlugin(Observer)"),Xs||vm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,h=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,b=n.onDrag,E=n.onPress,v=n.onRelease,A=n.onRight,R=n.onLeft,T=n.onUp,D=n.onDown,M=n.onChangeX,x=n.onChangeY,C=n.onChange,O=n.onToggleX,k=n.onToggleY,H=n.onHover,Y=n.onHoverEnd,X=n.onMove,G=n.ignoreCheck,z=n.isNormalizer,ne=n.onGestureStart,L=n.onGestureEnd,fe=n.onWheel,Le=n.onEnable,ot=n.onDisable,ke=n.onClick,$=n.scrollSpeed,ae=n.capture,te=n.allowClicks,Ee=n.lockAxis,Me=n.onLockAxis;this.target=a=Mn(a)||lr,this.vars=n,h&&(h=en.utils.toArray(h)),i=i||1e-9,s=s||0,_=_||1,$=$||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Hn.getComputedStyle(Ws).lineHeight)||22);var Fe,rt,He,P,Ge,ye,qe,F=this,tt=0,ge=0,We=n.passive||!u&&n.passive!==!1,$e=xr(a,vn),ht=xr(a,Yt),w=$e(),S=ht(),B=~o.indexOf("touch")&&!~o.indexOf("pointer")&&li[0]==="pointerdown",Z=No(a),j=a.ownerDocument||ar,K=[0,0,0],ve=[0,0,0],se=0,Ae=function(){return se=Io()},he=function(Re,Ye){return(F.event=Re)&&h&&Cy(Re.target,h)||Ye&&B&&Re.pointerType!=="touch"||G&&G(Re,Ye)},re=function(){F._vx.reset(),F._vy.reset(),rt.pause(),f&&f(F)},ue=function(){var Re=F.deltaX=ud(K),Ye=F.deltaY=ud(ve),de=Math.abs(Re)>=i,Oe=Math.abs(Ye)>=i;C&&(de||Oe)&&C(F,Re,Ye,K,ve),de&&(A&&F.deltaX>0&&A(F),R&&F.deltaX<0&&R(F),M&&M(F),O&&F.deltaX<0!=tt<0&&O(F),tt=F.deltaX,K[0]=K[1]=K[2]=0),Oe&&(D&&F.deltaY>0&&D(F),T&&F.deltaY<0&&T(F),x&&x(F),k&&F.deltaY<0!=ge<0&&k(F),ge=F.deltaY,ve[0]=ve[1]=ve[2]=0),(P||He)&&(X&&X(F),He&&(m&&He===1&&m(F),b&&b(F),He=0),P=!1),ye&&!(ye=!1)&&Me&&Me(F),Ge&&(fe(F),Ge=!1),Fe=0},Ue=function(Re,Ye,de){K[de]+=Re,ve[de]+=Ye,F._vx.update(Re),F._vy.update(Ye),c?Fe||(Fe=requestAnimationFrame(ue)):ue()},we=function(Re,Ye){Ee&&!qe&&(F.axis=qe=Math.abs(Re)>Math.abs(Ye)?"x":"y",ye=!0),qe!=="y"&&(K[2]+=Re,F._vx.update(Re,!0)),qe!=="x"&&(ve[2]+=Ye,F._vy.update(Ye,!0)),c?Fe||(Fe=requestAnimationFrame(ue)):ue()},ce=function(Re){if(!he(Re,1)){Re=go(Re,u);var Ye=Re.clientX,de=Re.clientY,Oe=Ye-F.x,De=de-F.y,Xe=F.isDragging;F.x=Ye,F.y=de,(Xe||(Oe||De)&&(Math.abs(F.startX-Ye)>=s||Math.abs(F.startY-de)>=s))&&(He||(He=Xe?2:1),Xe||(F.isDragging=!0),we(Oe,De))}},Ve=F.onPress=function(_e){he(_e,1)||_e&&_e.button||(F.axis=qe=null,rt.pause(),F.isPressed=!0,_e=go(_e),tt=ge=0,F.startX=F.x=_e.clientX,F.startY=F.y=_e.clientY,F._vx.reset(),F._vy.reset(),dn(z?a:j,li[1],ce,We,!0),F.deltaX=F.deltaY=0,E&&E(F))},U=F.onRelease=function(_e){if(!he(_e,1)){hn(z?a:j,li[1],ce,!0);var Re=!isNaN(F.y-F.startY),Ye=F.isDragging,de=Ye&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Oe=go(_e);!de&&Re&&(F._vx.reset(),F._vy.reset(),u&&te&&en.delayedCall(.08,function(){if(Io()-se>300&&!_e.defaultPrevented){if(_e.target.click)_e.target.click();else if(j.createEvent){var De=j.createEvent("MouseEvents");De.initMouseEvent("click",!0,!0,Hn,1,Oe.screenX,Oe.screenY,Oe.clientX,Oe.clientY,!1,!1,!1,!1,0,null),_e.target.dispatchEvent(De)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,f&&Ye&&!z&&rt.restart(!0),He&&ue(),p&&Ye&&p(F),v&&v(F,de)}},ie=function(Re){return Re.touches&&Re.touches.length>1&&(F.isGesturing=!0)&&ne(Re,F.isDragging)},oe=function(){return(F.isGesturing=!1)||L(F)},pe=function(Re){if(!he(Re)){var Ye=$e(),de=ht();Ue((Ye-w)*$,(de-S)*$,1),w=Ye,S=de,f&&rt.restart(!0)}},ee=function(Re){if(!he(Re)){Re=go(Re,u),fe&&(Ge=!0);var Ye=(Re.deltaMode===1?l:Re.deltaMode===2?Hn.innerHeight:1)*_;Ue(Re.deltaX*Ye,Re.deltaY*Ye,0),f&&!z&&rt.restart(!0)}},J=function(Re){if(!he(Re)){var Ye=Re.clientX,de=Re.clientY,Oe=Ye-F.x,De=de-F.y;F.x=Ye,F.y=de,P=!0,f&&rt.restart(!0),(Oe||De)&&we(Oe,De)}},Se=function(Re){F.event=Re,H(F)},Ne=function(Re){F.event=Re,Y(F)},ct=function(Re){return he(Re)||go(Re,u)&&ke(F)};rt=F._dc=en.delayedCall(d||.25,re).pause(),F.deltaX=F.deltaY=0,F._vx=Qu(0,50,!0),F._vy=Qu(0,50,!0),F.scrollX=$e,F.scrollY=ht,F.isDragging=F.isGesturing=F.isPressed=!1,mm(this),F.enable=function(_e){return F.isEnabled||(dn(Z?j:a,"scroll",Ju),o.indexOf("scroll")>=0&&dn(Z?j:a,"scroll",pe,We,ae),o.indexOf("wheel")>=0&&dn(a,"wheel",ee,We,ae),(o.indexOf("touch")>=0&&dm||o.indexOf("pointer")>=0)&&(dn(a,li[0],Ve,We,ae),dn(j,li[2],U),dn(j,li[3],U),te&&dn(a,"click",Ae,!0,!0),ke&&dn(a,"click",ct),ne&&dn(j,"gesturestart",ie),L&&dn(j,"gestureend",oe),H&&dn(a,Nr+"enter",Se),Y&&dn(a,Nr+"leave",Ne),X&&dn(a,Nr+"move",J)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=P=He=!1,F._vx.reset(),F._vy.reset(),w=$e(),S=ht(),_e&&_e.type&&Ve(_e),Le&&Le(F)),F},F.disable=function(){F.isEnabled&&(Ns.filter(function(_e){return _e!==F&&No(_e.target)}).length||hn(Z?j:a,"scroll",Ju),F.isPressed&&(F._vx.reset(),F._vy.reset(),hn(z?a:j,li[1],ce,!0)),hn(Z?j:a,"scroll",pe,ae),hn(a,"wheel",ee,ae),hn(a,li[0],Ve,ae),hn(j,li[2],U),hn(j,li[3],U),hn(a,"click",Ae,!0),hn(a,"click",ct),hn(j,"gesturestart",ie),hn(j,"gestureend",oe),hn(a,Nr+"enter",Se),hn(a,Nr+"leave",Ne),hn(a,Nr+"move",J),F.isEnabled=F.isPressed=F.isDragging=!1,ot&&ot(F))},F.kill=F.revert=function(){F.disable();var _e=Ns.indexOf(F);_e>=0&&Ns.splice(_e,1),Bi===F&&(Bi=0)},Ns.push(F),z&&No(a)&&(Bi=F),F.enable(g)},wy(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();zt.version="3.15.0";zt.create=function(r){return new zt(r)};zt.register=xm;zt.getAll=function(){return Ns.slice()};zt.getById=function(r){return Ns.filter(function(e){return e.vars.id===r})[0]};_m()&&en.registerPlugin(zt);var be,Rs,nt,mt,zn,dt,Bf,Cl,ra,Fo,bo,ka,sn,Gl,ef,_n,fd,hd,Cs,Sm,Lc,Mm,mn,tf,ym,Em,er,nf,zf,qs,kf,Oo,rf,Uc,Ha=1,on=Date.now,Ic=on(),ri=0,Ao=0,dd=function(e,t,n){var i=On(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},pd=function(e,t){return t&&(!On(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Py=function r(){return Ao&&requestAnimationFrame(r)},md=function(){return Gl=1},_d=function(){return Gl=0},pi=function(e){return e},wo=function(e){return Math.round(e*1e5)/1e5||0},Tm=function(){return typeof window<"u"},bm=function(){return be||Tm()&&(be=window.gsap)&&be.registerPlugin&&be},is=function(e){return!!~Bf.indexOf(e)},Am=function(e){return(e==="Height"?kf:nt["inner"+e])||zn["client"+e]||dt["client"+e]},wm=function(e){return dr(e,"getBoundingClientRect")||(is(e)?function(){return pl.width=nt.innerWidth,pl.height=kf,pl}:function(){return Ni(e)})},Dy=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=dr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Am(s):e["client"+s])||0}},Ly=function(e,t){return!t||~yi.indexOf(e)?wm(e):function(){return pl}},Mi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=dr(e,n))?o()-wm(e)()[s]:is(e)?(zn[n]||dt[n])-Am(i):e[n]-e["offset"+i])},Va=function(e,t){for(var n=0;n<Cs.length;n+=3)(!t||~t.indexOf(Cs[n+1]))&&e(Cs[n],Cs[n+1],Cs[n+2])},On=function(e){return typeof e=="string"},ln=function(e){return typeof e=="function"},Ro=function(e){return typeof e=="number"},Fr=function(e){return typeof e=="object"},vo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},bs=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},As=Math.abs,Rm="left",Cm="top",Hf="right",Vf="bottom",Zr="width",jr="height",Bo="Right",zo="Left",ko="Top",Ho="Bottom",Ht="padding",ei="margin",so="Width",Gf="Height",qt="px",ti=function(e){return nt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Uy=function(e){var t=ti(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},gd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ni=function(e,t){var n=t&&ti(e)[ef]!=="matrix(1, 0, 0, 1, 0, 0)"&&be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Pl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Pm=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Iy=function(e){return function(t){return be.utils.snap(Pm(e),t)}},Wf=function(e){var t=be.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Ny=function(e){return function(t,n){return Wf(Pm(e))(t,n.direction)}},Ga=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Jt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},jt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Wa=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},vd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Xa={toggleActions:"play",anticipatePin:0},Dl={top:0,left:0,center:.5,bottom:1,right:1},ul=function(e,t){if(On(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Dl?Dl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},qa=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,_=mt.createElement("div"),g=is(n)||dr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?dt:n.tagName==="IFRAME"?n.contentDocument.body:n,b=e.indexOf("start")!==-1,E=b?c:u,v="border-color:"+E+";font-size:"+f+";color:"+E+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(v+=(i===Yt?Hf:Vf)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=b,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=v,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],fl(_,0,i,b),_},fl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+so]=1,s["border"+a+so]=0,s[n.p]=t+"px",be.set(e,s)},et=[],sf={},sa,xd=function(){return on()-ri>34&&(sa||(sa=requestAnimationFrame(Hi)))},ws=function(){(!mn||!mn.isPressed||mn.startX>dt.clientWidth)&&(it.cache++,mn?sa||(sa=requestAnimationFrame(Hi)):Hi(),ri||ss("scrollStart"),ri=on())},Nc=function(){Em=nt.innerWidth,ym=nt.innerHeight},Co=function(e){it.cache++,(e===!0||!sn&&!Mm&&!mt.fullscreenElement&&!mt.webkitFullscreenElement&&(!tf||Em!==nt.innerWidth||Math.abs(nt.innerHeight-ym)>nt.innerHeight*.25))&&Cl.restart(!0)},rs={},Fy=[],Dm=function r(){return jt(Qe,"scrollEnd",r)||Wr(!0)},ss=function(e){return rs[e]&&rs[e].map(function(t){return t()})||Fy},Fn=[],Lm=function(e){for(var t=0;t<Fn.length;t+=5)(!e||Fn[t+4]&&Fn[t+4].query===e)&&(Fn[t].style.cssText=Fn[t+1],Fn[t].getBBox&&Fn[t].setAttribute("transform",Fn[t+2]||""),Fn[t+3].uncache=1)},Um=function(){return it.forEach(function(e){return ln(e)&&++e.cacheID&&(e.rec=e())})},Xf=function(e,t){var n;for(_n=0;_n<et.length;_n++)n=et[_n],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Oo=!0,t&&Lm(t),t||ss("revert")},Im=function(e,t){it.cache++,(t||!gn)&&it.forEach(function(n){return ln(n)&&n.cacheID++&&(n.rec=0)}),On(e)&&(nt.history.scrollRestoration=zf=e)},gn,Jr=0,Sd,Oy=function(){if(Sd!==Jr){var e=Sd=Jr;requestAnimationFrame(function(){return e===Jr&&Wr(!0)})}},Nm=function(){dt.appendChild(qs),kf=!mn&&qs.offsetHeight||nt.innerHeight,dt.removeChild(qs)},Md=function(e){return ra(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Wr=function(e,t){if(zn=mt.documentElement,dt=mt.body,Bf=[nt,mt,zn,dt],ri&&!e&&!Oo){Jt(Qe,"scrollEnd",Dm);return}Nm(),gn=Qe.isRefreshing=!0,Oo||Um();var n=ss("refreshInit");Sm&&Qe.sort(),t||Xf(),it.forEach(function(i){ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),Oo=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),rf=1,Md(!0),et.forEach(function(i){var s=Mi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Md(!1),rf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),it.forEach(function(i){ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Im(zf,1),Cl.pause(),Jr++,gn=2,Hi(2),et.forEach(function(i){return ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),gn=Qe.isRefreshing=!1,ss("refresh")},of=0,hl=1,Vo,Hi=function(e){if(e===2||!gn&&!Oo){Qe.isUpdating=!0,Vo&&Vo.update(0);var t=et.length,n=on(),i=n-Ic>=50,s=t&&et[0].scroll();if(hl=of>s?-1:1,gn||(of=s),i&&(ri&&!Gl&&n-ri>200&&(ri=0,ss("scrollEnd")),bo=Ic,Ic=n),hl<0){for(_n=t;_n-- >0;)et[_n]&&et[_n].update(0,i);hl=1}else for(_n=0;_n<t;_n++)et[_n]&&et[_n].update(0,i);Qe.isUpdating=!1}sa=0},af=[Rm,Cm,Vf,Hf,ei+Ho,ei+Bo,ei+ko,ei+zo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],dl=af.concat([Zr,jr,"boxSizing","max"+so,"max"+Gf,"position",ei,Ht,Ht+ko,Ht+Bo,Ht+Ho,Ht+zo]),By=function(e,t,n){Ys(n);var i=e._gsap;if(i.spacerIsNative)Ys(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Fc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=af.length,o=t.style,a=e.style,l;s--;)l=af[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Vf]=a[Hf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Zr]=Pl(e,vn)+qt,o[jr]=Pl(e,Yt)+qt,o[Ht]=a[ei]=a[Cm]=a[Rm]="0",Ys(i),a[Zr]=a["max"+so]=n[Zr],a[jr]=a["max"+Gf]=n[jr],a[Ht]=n[Ht],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},zy=/([A-Z])/g,Ys=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||be.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(zy,"-$1").toLowerCase())}},Ya=function(e){for(var t=dl.length,n=e.style,i=[],s=0;s<t;s++)i.push(dl[s],n[dl[s]]);return i.t=e,i},ky=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},pl={left:0,top:0},yd=function(e,t,n,i,s,o,a,l,c,u,f,d,h,_){ln(e)&&(e=e(l)),On(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?ul("0"+e.substr(3),n):0));var g=h?h.time():0,m,p,b;if(h&&h.seek(0),isNaN(e)||(e=+e),Ro(e))h&&(e=be.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),a&&fl(a,n,i,!0);else{ln(t)&&(t=t(l));var E=(e||"0").split(" "),v,A,R,T;b=Mn(t,l)||dt,v=Ni(b)||{},(!v||!v.left&&!v.top)&&ti(b).display==="none"&&(T=b.style.display,b.style.display="block",v=Ni(b),T?b.style.display=T:b.style.removeProperty("display")),A=ul(E[0],v[i.d]),R=ul(E[1]||"0",n),e=v[i.p]-c[i.p]-u+A+s-R,a&&fl(a,R,i,n-R<20||a._isStart&&R>20),n-=n-R}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var D=e+n,M=o._isStart;m="scroll"+i.d2,fl(o,D,i,M&&D>20||!M&&(f?Math.max(dt[m],zn[m]):o.parentNode[m])<=D+1),f&&(c=Ni(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+qt))}return h&&b&&(m=Ni(b),h.seek(d),p=Ni(b),h._caScrollDist=m[i.p]-p[i.p],e=e/h._caScrollDist*d),h&&h.seek(g),h?e:Math.round(e)},Hy=/(webkit|moz|length|cssText|inset)/i,Ed=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===dt){e._stOrig=s.cssText,a=ti(e);for(o in a)!+o&&!Hy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;be.core.getCache(e).uncache=1,t.appendChild(e)}},Fm=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},$a=function(e,t,n){var i={};i[t.p]="+="+n,be.set(e,i)},Td=function(e,t){var n=xr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var d=o.tween,h=l.onComplete,_={};c=c||n();var g=Fm(n,c,function(){d.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){it.cache++,o.tween&&Hi()},l.onComplete=function(){o.tween=0,h&&h.call(d)},d=o.tween=be.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Jt(e,"wheel",n.wheelHandler),Qe.isTouch&&Jt(e,"touchmove",n.wheelHandler),s},Qe=(function(){function r(t,n){Rs||r.register(be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),nf(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ao){this.update=this.refresh=this.kill=pi;return}n=gd(On(n)||Ro(n)||n.nodeType?{trigger:n}:n,Xa);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,b=s.onSnapComplete,E=s.once,v=s.snap,A=s.pinReparent,R=s.pinSpacer,T=s.containerAnimation,D=s.fastScrollEnd,M=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?vn:Yt,C=!f&&f!==0,O=Mn(n.scroller||nt),k=be.core.getCache(O),H=is(O),Y=("pinType"in n?n.pinType:dr(O,"pinType")||H&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=C&&n.toggleActions.split(" "),z="markers"in n?n.markers:Xa.markers,ne=H?0:parseFloat(ti(O)["border"+x.p2+so])||0,L=this,fe=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Le=Dy(O,H,x),ot=Ly(O,H),ke=0,$=0,ae=0,te=xr(O,x),Ee,Me,Fe,rt,He,P,Ge,ye,qe,F,tt,ge,We,$e,ht,w,S,B,Z,j,K,ve,se,Ae,he,re,ue,Ue,we,ce,Ve,U,ie,oe,pe,ee,J,Se,Ne;if(L._startClamp=L._endClamp=!1,L._dir=x,m*=45,L.scroller=O,L.scroll=T?T.time.bind(T):te,rt=te(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Sm=1,n.refreshPriority===-9999&&(Vo=L)),k.tweenScroll=k.tweenScroll||{top:Td(O,Yt),left:Td(O,vn)},L.tweenTo=Ee=k.tweenScroll[x.p],L.scrubDuration=function(de){ie=Ro(de)&&de,ie?U?U.duration(de):U=be.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ie,paused:!0,onComplete:function(){return p&&p(L)}}):(U&&U.progress(1).kill(),U=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(f),ce=0,l||(l=i.vars.id)),v&&((!Fr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in dt.style&&be.set(H?[dt,zn]:O,{scrollBehavior:"auto"}),it.forEach(function(de){return ln(de)&&de.target===(H?mt.scrollingElement||zn:O)&&(de.smooth=!1)}),Fe=ln(v.snapTo)?v.snapTo:v.snapTo==="labels"?Iy(i):v.snapTo==="labelsDirectional"?Ny(i):v.directional!==!1?function(de,Oe){return Wf(v.snapTo)(de,on()-$<500?0:Oe.direction)}:be.utils.snap(v.snapTo),oe=v.duration||{min:.1,max:2},oe=Fr(oe)?Fo(oe.min,oe.max):Fo(oe,oe),pe=be.delayedCall(v.delay||ie/2||.1,function(){var de=te(),Oe=on()-$<500,De=Ee.tween;if((Oe||Math.abs(L.getVelocity())<10)&&!De&&!Gl&&ke!==de){var Xe=(de-P)/$e,Nt=i&&!C?i.totalProgress():Xe,je=Oe?0:(Nt-Ve)/(on()-bo)*1e3||0,At=be.utils.clamp(-Xe,1-Xe,As(je/2)*je/.185),Ft=Xe+(v.inertia===!1?0:At),Et,xt,pt=v,Dn=pt.onStart,Tt=pt.onInterrupt,un=pt.onComplete;if(Et=Fe(Ft,L),Ro(Et)||(Et=Ft),xt=Math.max(0,Math.round(P+Et*$e)),de<=Ge&&de>=P&&xt!==de){if(De&&!De._initted&&De.data<=As(xt-de))return;v.inertia===!1&&(At=Et-Xe),Ee(xt,{duration:oe(As(Math.max(As(Ft-Nt),As(Et-Nt))*.185/je/.05||0)),ease:v.ease||"power3",data:As(xt-de),onInterrupt:function(){return pe.restart(!0)&&Tt&&bs(L,Tt)},onComplete:function(){L.update(),ke=te(),i&&!C&&(U?U.resetTo("totalProgress",Et,i._tTime/i._tDur):i.progress(Et)),ce=Ve=i&&!C?i.totalProgress():L.progress,b&&b(L),un&&bs(L,un)}},de,At*$e,xt-de-At*$e),Dn&&bs(L,Dn,Ee.tween)}}else L.isActive&&ke!==de&&pe.restart(!0)}).pause()),l&&(sf[l]=L),d=L.trigger=Mn(d||h!==!0&&h),Ne=d&&d._gsap&&d._gsap.stRevert,Ne&&(Ne=Ne(L)),h=h===!0?d:Mn(h),On(a)&&(a={targets:d,className:a}),h&&(_===!1||_===ei||(_=!_&&h.parentNode&&h.parentNode.style&&ti(h.parentNode).display==="flex"?!1:Ht),L.pin=h,Me=be.core.getCache(h),Me.spacer?ht=Me.pinState:(R&&(R=Mn(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Me.spacerIsNative=!!R,R&&(Me.spacerState=Ya(R))),Me.spacer=B=R||mt.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),Me.pinState=ht=Ya(h)),n.force3D!==!1&&be.set(h,{force3D:!0}),L.spacer=B=Me.spacer,we=ti(h),Ae=we[_+x.os2],j=be.getProperty(h),K=be.quickSetter(h,x.a,qt),Fc(h,B,we),S=Ya(h)),z){ge=Fr(z)?gd(z,vd):vd,F=qa("scroller-start",l,O,x,ge,0),tt=qa("scroller-end",l,O,x,ge,0,F),Z=F["offset"+x.op.d2];var ct=Mn(dr(O,"content")||O);ye=this.markerStart=qa("start",l,ct,x,ge,Z,0,T),qe=this.markerEnd=qa("end",l,ct,x,ge,Z,0,T),T&&(Se=be.quickSetter([ye,qe],x.a,qt)),!Y&&!(yi.length&&dr(O,"fixedMarkers")===!0)&&(Uy(H?dt:O),be.set([F,tt],{force3D:!0}),re=be.quickSetter(F,x.a,qt),Ue=be.quickSetter(tt,x.a,qt))}if(T){var _e=T.vars.onUpdate,Re=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){L.update(0,0,1),_e&&_e.apply(T,Re||[])})}if(L.previous=function(){return et[et.indexOf(L)-1]},L.next=function(){return et[et.indexOf(L)+1]},L.revert=function(de,Oe){if(!Oe)return L.kill(!0);var De=de!==!1||!L.enabled,Xe=sn;De!==L.isReverted&&(De&&(ee=Math.max(te(),L.scroll.rec||0),ae=L.progress,J=i&&i.progress()),ye&&[ye,qe,F,tt].forEach(function(Nt){return Nt.style.display=De?"none":"block"}),De&&(sn=L,L.update(De)),h&&(!A||!L.isActive)&&(De?By(h,B,ht):Fc(h,B,ti(h),he)),De||L.update(De),sn=Xe,L.isReverted=De)},L.refresh=function(de,Oe,De,Xe){if(!((sn||!L.enabled)&&!Oe)){if(h&&de&&ri){Jt(r,"scrollEnd",Dm);return}!gn&&fe&&fe(L),sn=L,Ee.tween&&!De&&(Ee.tween.kill(),Ee.tween=0),U&&U.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(st){return st.vars.immediateRender&&st.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Nt=Le(),je=ot(),At=T?T.duration():Mi(O,x),Ft=$e<=.01||!$e,Et=0,xt=Xe||0,pt=Fr(De)?De.end:n.end,Dn=n.endTrigger||d,Tt=Fr(De)?De.start:n.start||(n.start===0||!d?0:h?"0 0":"0 100%"),un=L.pinnedContainer=n.pinnedContainer&&Mn(n.pinnedContainer,L),Yn=d&&Math.max(0,et.indexOf(L))||0,Xt=Yn,y,I,V,W,N,Q,le,Te,xe,Ie,Pe,Ce,Ke;for(z&&Fr(De)&&(Ce=be.getProperty(F,x.p),Ke=be.getProperty(tt,x.p));Xt-- >0;)Q=et[Xt],Q.end||Q.refresh(0,1)||(sn=L),le=Q.pin,le&&(le===d||le===h||le===un)&&!Q.isReverted&&(Ie||(Ie=[]),Ie.unshift(Q),Q.revert(!0,!0)),Q!==et[Xt]&&(Yn--,Xt--);for(ln(Tt)&&(Tt=Tt(L)),Tt=dd(Tt,"start",L),P=yd(Tt,d,Nt,x,te(),ye,F,L,je,ne,Y,At,T,L._startClamp&&"_startClamp")||(h?-.001:0),ln(pt)&&(pt=pt(L)),On(pt)&&!pt.indexOf("+=")&&(~pt.indexOf(" ")?pt=(On(Tt)?Tt.split(" ")[0]:"")+pt:(Et=ul(pt.substr(2),Nt),pt=On(Tt)?Tt:(T?be.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,P):P)+Et,Dn=d)),pt=dd(pt,"end",L),Ge=Math.max(P,yd(pt||(Dn?"100% 0":At),Dn,Nt,x,te()+Et,qe,tt,L,je,ne,Y,At,T,L._endClamp&&"_endClamp"))||-.001,Et=0,Xt=Yn;Xt--;)Q=et[Xt]||{},le=Q.pin,le&&Q.start-Q._pinPush<=P&&!T&&Q.end>0&&(y=Q.end-(L._startClamp?Math.max(0,Q.start):Q.start),(le===d&&Q.start-Q._pinPush<P||le===un)&&isNaN(Tt)&&(Et+=y*(1-Q.progress)),le===h&&(xt+=y));if(P+=Et,Ge+=Et,L._startClamp&&(L._startClamp+=Et),L._endClamp&&!gn&&(L._endClamp=Ge||-.001,Ge=Math.min(Ge,Mi(O,x))),$e=Ge-P||(P-=.01)&&.001,Ft&&(ae=be.utils.clamp(0,1,be.utils.normalize(P,Ge,ee))),L._pinPush=xt,ye&&Et&&(y={},y[x.a]="+="+Et,un&&(y[x.p]="-="+te()),be.set([ye,qe],y)),h&&!(rf&&L.end>=Mi(O,x)))y=ti(h),W=x===Yt,V=te(),ve=parseFloat(j(x.a))+xt,!At&&Ge>1&&(Pe=(H?mt.scrollingElement||zn:O).style,Pe={style:Pe,value:Pe["overflow"+x.a.toUpperCase()]},H&&ti(dt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Pe.style["overflow"+x.a.toUpperCase()]="scroll")),Fc(h,B,y),S=Ya(h),I=Ni(h,!0),Te=Y&&xr(O,W?vn:Yt)(),_?(he=[_+x.os2,$e+xt+qt],he.t=B,Xt=_===Ht?Pl(h,x)+$e+xt:0,Xt&&(he.push(x.d,Xt+qt),B.style.flexBasis!=="auto"&&(B.style.flexBasis=Xt+qt)),Ys(he),un&&et.forEach(function(st){st.pin===un&&st.vars.pinSpacing!==!1&&(st._subPinOffset=!0)}),Y&&te(ee)):(Xt=Pl(h,x),Xt&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=Xt+qt)),Y&&(N={top:I.top+(W?V-P:Te)+qt,left:I.left+(W?Te:V-P)+qt,boxSizing:"border-box",position:"fixed"},N[Zr]=N["max"+so]=Math.ceil(I.width)+qt,N[jr]=N["max"+Gf]=Math.ceil(I.height)+qt,N[ei]=N[ei+ko]=N[ei+Bo]=N[ei+Ho]=N[ei+zo]="0",N[Ht]=y[Ht],N[Ht+ko]=y[Ht+ko],N[Ht+Bo]=y[Ht+Bo],N[Ht+Ho]=y[Ht+Ho],N[Ht+zo]=y[Ht+zo],w=ky(ht,N,A),gn&&te(0)),i?(xe=i._initted,Lc(1),i.render(i.duration(),!0,!0),se=j(x.a)-ve+$e+xt,ue=Math.abs($e-se)>1,Y&&ue&&w.splice(w.length-2,2),i.render(0,!0,!0),xe||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Lc(0)):se=$e,Pe&&(Pe.value?Pe.style["overflow"+x.a.toUpperCase()]=Pe.value:Pe.style.removeProperty("overflow-"+x.a));else if(d&&te()&&!T)for(I=d.parentNode;I&&I!==dt;)I._pinOffset&&(P-=I._pinOffset,Ge-=I._pinOffset),I=I.parentNode;Ie&&Ie.forEach(function(st){return st.revert(!1,!0)}),L.start=P,L.end=Ge,rt=He=gn?ee:te(),!T&&!gn&&(rt<ee&&te(ee),L.scroll.rec=0),L.revert(!1,!0),$=on(),pe&&(ke=-1,pe.restart(!0)),sn=0,i&&C&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(Ft||ae!==L.progress||T||g||i&&!i._initted)&&(i&&!C&&(i._initted||ae||i.vars.immediateRender!==!1)&&i.totalProgress(T&&P<-.001&&!ae?be.utils.normalize(P,Ge,0):ae,!0),L.progress=Ft||(rt-P)/$e===ae?0:ae),h&&_&&(B._pinOffset=Math.round(L.progress*se)),U&&U.invalidate(),isNaN(Ce)||(Ce-=be.getProperty(F,x.p),Ke-=be.getProperty(tt,x.p),$a(F,x,Ce),$a(ye,x,Ce-(Xe||0)),$a(tt,x,Ke),$a(qe,x,Ke-(Xe||0))),Ft&&!gn&&L.update(),u&&!gn&&!We&&(We=!0,u(L),We=!1)}},L.getVelocity=function(){return(te()-He)/(on()-bo)*1e3||0},L.endAnimation=function(){vo(L.callbackAnimation),i&&(U?U.progress(1):i.paused()?C||vo(i,L.direction<0,1):vo(i,i.reversed()))},L.labelToScroll=function(de){return i&&i.labels&&(P||L.refresh()||P)+i.labels[de]/i.duration()*$e||0},L.getTrailing=function(de){var Oe=et.indexOf(L),De=L.direction>0?et.slice(0,Oe).reverse():et.slice(Oe+1);return(On(de)?De.filter(function(Xe){return Xe.vars.preventOverlaps===de}):De).filter(function(Xe){return L.direction>0?Xe.end<=P:Xe.start>=Ge})},L.update=function(de,Oe,De){if(!(T&&!De&&!de)){var Xe=gn===!0?ee:L.scroll(),Nt=de?0:(Xe-P)/$e,je=Nt<0?0:Nt>1?1:Nt||0,At=L.progress,Ft,Et,xt,pt,Dn,Tt,un,Yn;if(Oe&&(He=rt,rt=T?te():Xe,v&&(Ve=ce,ce=i&&!C?i.totalProgress():je)),m&&h&&!sn&&!Ha&&ri&&(!je&&P<Xe+(Xe-He)/(on()-bo)*m?je=1e-4:je===1&&Ge>Xe+(Xe-He)/(on()-bo)*m&&(je=.9999)),je!==At&&L.enabled){if(Ft=L.isActive=!!je&&je<1,Et=!!At&&At<1,Tt=Ft!==Et,Dn=Tt||!!je!=!!At,L.direction=je>At?1:-1,L.progress=je,Dn&&!sn&&(xt=je&&!At?0:je===1?1:At===1?2:3,C&&(pt=!Tt&&G[xt+1]!=="none"&&G[xt+1]||G[xt],Yn=i&&(pt==="complete"||pt==="reset"||pt in i))),M&&(Tt||Yn)&&(Yn||f||!i)&&(ln(M)?M(L):L.getTrailing(M).forEach(function(V){return V.endAnimation()})),C||(U&&!sn&&!Ha?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",je,i._tTime/i._tDur):(U.vars.totalProgress=je,U.invalidate().restart())):i&&i.totalProgress(je,!!(sn&&($||de)))),h){if(de&&_&&(B.style[_+x.os2]=Ae),!Y)K(wo(ve+se*je));else if(Dn){if(un=!de&&je>At&&Ge+1>Xe&&Xe+1>=Mi(O,x),A)if(!de&&(Ft||un)){var Xt=Ni(h,!0),y=Xe-P;Ed(h,dt,Xt.top+(x===Yt?y:0)+qt,Xt.left+(x===Yt?0:y)+qt)}else Ed(h,B);Ys(Ft||un?w:S),ue&&je<1&&Ft||K(ve+(je===1&&!un?se:0))}}v&&!Ee.tween&&!sn&&!Ha&&pe.restart(!0),a&&(Tt||E&&je&&(je<1||!Uc))&&ra(a.targets).forEach(function(V){return V.classList[Ft||E?"add":"remove"](a.className)}),o&&!C&&!de&&o(L),Dn&&!sn?(C&&(Yn&&(pt==="complete"?i.pause().totalProgress(1):pt==="reset"?i.restart(!0).pause():pt==="restart"?i.restart(!0):i[pt]()),o&&o(L)),(Tt||!Uc)&&(c&&Tt&&bs(L,c),X[xt]&&bs(L,X[xt]),E&&(je===1?L.kill(!1,1):X[xt]=0),Tt||(xt=je===1?1:3,X[xt]&&bs(L,X[xt]))),D&&!Ft&&Math.abs(L.getVelocity())>(Ro(D)?D:2500)&&(vo(L.callbackAnimation),U?U.progress(1):vo(i,pt==="reverse"?1:!je,1))):C&&o&&!sn&&o(L)}if(Ue){var I=T?Xe/T.duration()*(T._caScrollDist||0):Xe;re(I+(F._isFlipped?1:0)),Ue(I)}Se&&Se(-Xe/T.duration()*(T._caScrollDist||0))}},L.enable=function(de,Oe){L.enabled||(L.enabled=!0,Jt(O,"resize",Co),H||Jt(O,"scroll",ws),fe&&Jt(r,"refreshInit",fe),de!==!1&&(L.progress=ae=0,rt=He=ke=te()),Oe!==!1&&L.refresh())},L.getTween=function(de){return de&&Ee?Ee.tween:U},L.setPositions=function(de,Oe,De,Xe){if(T){var Nt=T.scrollTrigger,je=T.duration(),At=Nt.end-Nt.start;de=Nt.start+At*de/je,Oe=Nt.start+At*Oe/je}L.refresh(!1,!1,{start:pd(de,De&&!!L._startClamp),end:pd(Oe,De&&!!L._endClamp)},Xe),L.update()},L.adjustPinSpacing=function(de){if(he&&de){var Oe=he.indexOf(x.d)+1;he[Oe]=parseFloat(he[Oe])+de+qt,he[1]=parseFloat(he[1])+de+qt,Ys(he)}},L.disable=function(de,Oe){if(de!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,Oe||U&&U.pause(),ee=0,Me&&(Me.uncache=1),fe&&jt(r,"refreshInit",fe),pe&&(pe.pause(),Ee.tween&&Ee.tween.kill()&&(Ee.tween=0)),!H)){for(var De=et.length;De--;)if(et[De].scroller===O&&et[De]!==L)return;jt(O,"resize",Co),H||jt(O,"scroll",ws)}},L.kill=function(de,Oe){L.disable(de,Oe),U&&!Oe&&U.kill(),l&&delete sf[l];var De=et.indexOf(L);De>=0&&et.splice(De,1),De===_n&&hl>0&&_n--,De=0,et.forEach(function(Xe){return Xe.scroller===L.scroller&&(De=1)}),De||gn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,de&&i.revert({kill:!1}),Oe||i.kill()),ye&&[ye,qe,F,tt].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),Vo===L&&(Vo=0),h&&(Me&&(Me.uncache=1),De=0,et.forEach(function(Xe){return Xe.pin===h&&De++}),De||(Me.spacer=0)),n.onKill&&n.onKill(L)},et.push(L),L.enable(!1,!1),Ne&&Ne(L),i&&i.add&&!$e){var Ye=L.update;L.update=function(){L.update=Ye,it.cache++,P||Ge||L.refresh()},be.delayedCall(.01,L.update),$e=.01,P=Ge=0}else L.refresh();h&&Oy()},r.register=function(n){return Rs||(be=n||bm(),Tm()&&window.document&&r.enable(),Rs=Ao),Rs},r.defaults=function(n){if(n)for(var i in n)Xa[i]=n[i];return Xa},r.disable=function(n,i){Ao=0,et.forEach(function(o){return o[i?"kill":"disable"](n)}),jt(nt,"wheel",ws),jt(mt,"scroll",ws),clearInterval(ka),jt(mt,"touchcancel",pi),jt(dt,"touchstart",pi),Ga(jt,mt,"pointerdown,touchstart,mousedown",md),Ga(jt,mt,"pointerup,touchend,mouseup",_d),Cl.kill(),Va(jt);for(var s=0;s<it.length;s+=3)Wa(jt,it[s],it[s+1]),Wa(jt,it[s],it[s+2])},r.enable=function(){if(nt=window,mt=document,zn=mt.documentElement,dt=mt.body,be){if(ra=be.utils.toArray,Fo=be.utils.clamp,nf=be.core.context||pi,Lc=be.core.suppressOverwrites||pi,zf=nt.history.scrollRestoration||"auto",of=nt.pageYOffset||0,be.core.globals("ScrollTrigger",r),dt){Ao=1,qs=document.createElement("div"),qs.style.height="100vh",qs.style.position="absolute",Nm(),Py(),zt.register(be),r.isTouch=zt.isTouch,er=zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),tf=zt.isTouch===1,Jt(nt,"wheel",ws),Bf=[nt,mt,zn,dt],be.matchMedia?(r.matchMedia=function(u){var f=be.matchMedia(),d;for(d in u)f.add(d,u[d]);return f},be.addEventListener("matchMediaInit",function(){Um(),Xf()}),be.addEventListener("matchMediaRevert",function(){return Lm()}),be.addEventListener("matchMedia",function(){Wr(0,1),ss("matchMedia")}),be.matchMedia().add("(orientation: portrait)",function(){return Nc(),Nc})):console.warn("Requires GSAP 3.11.0 or later"),Nc(),Jt(mt,"scroll",ws);var n=dt.hasAttribute("style"),i=dt.style,s=i.borderTopStyle,o=be.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ni(dt),Yt.m=Math.round(a.top+Yt.sc())||0,vn.m=Math.round(a.left+vn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(dt.setAttribute("style",""),dt.removeAttribute("style")),ka=setInterval(xd,250),be.delayedCall(.5,function(){return Ha=0}),Jt(mt,"touchcancel",pi),Jt(dt,"touchstart",pi),Ga(Jt,mt,"pointerdown,touchstart,mousedown",md),Ga(Jt,mt,"pointerup,touchend,mouseup",_d),ef=be.utils.checkPrefix("transform"),dl.push(ef),Rs=on(),Cl=be.delayedCall(.2,Wr).pause(),Cs=[mt,"visibilitychange",function(){var u=nt.innerWidth,f=nt.innerHeight;mt.hidden?(fd=u,hd=f):(fd!==u||hd!==f)&&Co()},mt,"DOMContentLoaded",Wr,nt,"load",Wr,nt,"resize",Co],Va(Jt),et.forEach(function(u){return u.enable(0,1)}),l=0;l<it.length;l+=3)Wa(jt,it[l],it[l+1]),Wa(jt,it[l],it[l+2])}else if(mt){var c=function u(){r.enable(),mt.removeEventListener("DOMContentLoaded",u)};mt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Uc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ka)||(ka=i)&&setInterval(xd,i),"ignoreMobileResize"in n&&(tf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Va(jt)||Va(Jt,n.autoRefreshEvents||"none"),Mm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Mn(n),o=it.indexOf(s),a=is(s);~o&&it.splice(o,a?6:2),i&&(a?yi.unshift(nt,i,dt,i,zn,i):yi.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(On(n)?Mn(n):n).getBoundingClientRect(),a=o[s?Zr:jr]*i||0;return s?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},r.positionInViewport=function(n,i,s){On(n)&&(n=Mn(n));var o=n.getBoundingClientRect(),a=o[s?Zr:jr],l=i==null?a/2:i in Dl?Dl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/nt.innerWidth:(o.top+l)/nt.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=rs.killAll||[];rs={},i.forEach(function(s){return s()})}},r})();Qe.version="3.15.0";Qe.saveStyles=function(r){return r?ra(r).forEach(function(e){if(e&&e.style){var t=Fn.indexOf(e);t>=0&&Fn.splice(t,5),Fn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),be.core.getCache(e),nf())}}):Fn};Qe.revert=function(r,e){return Xf(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?Co(!0):(Rs||Qe.register())&&Wr(!0)};Qe.update=function(r){return++it.cache&&Hi(r===!0?2:0)};Qe.clearScrollMemory=Im;Qe.maxScroll=function(r,e){return Mi(r,e?vn:Yt)};Qe.getScrollFunc=function(r,e){return xr(Mn(r),e?vn:Yt)};Qe.getById=function(r){return sf[r]};Qe.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!ri};Qe.snapDirectional=Wf;Qe.addEventListener=function(r,e){var t=rs[r]||(rs[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=rs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],d=[],h=be.delayedCall(i,function(){u(f,d),f=[],d=[]}).pause();return function(_){f.length||h.restart(!0),f.push(_.trigger),d.push(_),s<=f.length&&h.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&ln(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return ln(s)&&(s=s(),Jt(Qe,"refresh",function(){return s=e.batchMax()})),ra(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Qe.create(c))}),t};var bd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Oc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(zt.isTouch?" pinch-zoom":""):"none",e===zn&&r(dt,t)},Ka={auto:1,scroll:1},Vy=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||be.core.getCache(s),a=on(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==dt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ka[(l=ti(s)).overflowY]||Ka[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!is(s)&&(Ka[(l=ti(s)).overflowY]||Ka[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Om=function(e,t,n,i){return zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Vy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Jt(mt,zt.eventTypes[0],wd,!1,!0)},onDisable:function(){return jt(mt,zt.eventTypes[0],wd,!0)}})},Gy=/(input|label|select|textarea)/i,Ad,wd=function(e){var t=Gy.test(e.target.tagName);(t||Ad)&&(e._gsapAllow=!0,Ad=t)},Wy=function(e){Fr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Mn(e.target)||zn,u=be.core.globals().ScrollSmoother,f=u&&u.get(),d=er&&(e.content&&Mn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=xr(c,Yt),_=xr(c,vn),g=1,m=(zt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,p=0,b=ln(i)?function(){return i(a)}:function(){return i||2.8},E,v,A=Om(c,e.type,!0,s),R=function(){return v=!1},T=pi,D=pi,M=function(){l=Mi(c,Yt),D=Fo(er?1:0,l),n&&(T=Fo(0,Mi(c,vn))),E=Jr},x=function(){d._gsap.y=wo(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},C=function(){if(v){requestAnimationFrame(R);var z=wo(a.deltaY/2),ne=D(h.v-z);if(d&&ne!==h.v+h.offset){h.offset=ne-h.v;var L=wo((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",d._gsap.y=L+"px",h.cacheID=it.cache,Hi()}return!0}h.offset&&x(),v=!0},O,k,H,Y,X=function(){M(),O.isActive()&&O.vars.scrollY>l&&(h()>l?O.progress(1)&&h(l):O.resetTo("scrollY",l))};return d&&be.set(d,{y:"+=0"}),e.ignoreCheck=function(G){return er&&G.type==="touchmove"&&C()||g>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){v=!1;var G=g;g=wo((nt.visualViewport&&nt.visualViewport.scale||1)/m),O.pause(),G!==g&&Oc(c,g>1.01?!0:n?!1:"x"),k=_(),H=h(),M(),E=Jr},e.onRelease=e.onGestureStart=function(G,z){if(h.offset&&x(),!z)Y.restart(!0);else{it.cache++;var ne=b(),L,fe;n&&(L=_(),fe=L+ne*.05*-G.velocityX/.227,ne*=bd(_,L,fe,Mi(c,vn)),O.vars.scrollX=T(fe)),L=h(),fe=L+ne*.05*-G.velocityY/.227,ne*=bd(h,L,fe,Mi(c,Yt)),O.vars.scrollY=D(fe),O.invalidate().duration(ne).play(.01),(er&&O.vars.scrollY>=l||L>=l-1)&&be.to({},{onUpdate:X,duration:ne})}o&&o(G)},e.onWheel=function(){O._ts&&O.pause(),on()-p>1e3&&(E=0,p=on())},e.onChange=function(G,z,ne,L,fe){if(Jr!==E&&M(),z&&n&&_(T(L[2]===z?k+(G.startX-G.x):_()+z-L[1])),ne){h.offset&&x();var Le=fe[2]===ne,ot=Le?H+G.startY-G.y:h()+ne-fe[1],ke=D(ot);Le&&ot!==ke&&(H+=ke-ot),h(ke)}(ne||z)&&Hi()},e.onEnable=function(){Oc(c,n?!1:"x"),Qe.addEventListener("refresh",X),Jt(nt,"resize",X),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=_.smooth=!1),A.enable()},e.onDisable=function(){Oc(c,!0),jt(nt,"resize",X),Qe.removeEventListener("refresh",X),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new zt(e),a.iOS=er,er&&!h()&&h(1),er&&be.ticker.add(pi),Y=a._dc,O=be.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Fm(h,h(),function(){return O.pause()})},onUpdate:Hi,onComplete:Y.vars.onComplete}),a};Qe.sort=function(r){if(ln(r))return et.sort(r);var e=nt.pageYOffset||0;return Qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new zt(r)};Qe.normalizeScroll=function(r){if(typeof r>"u")return mn;if(r===!0&&mn)return mn.enable();if(r===!1){mn&&mn.kill(),mn=r;return}var e=r instanceof zt?r:Wy(r);return mn&&mn.target===e.target&&mn.kill(),is(e.target)&&(mn=e),e};Qe.core={_getVelocityProp:Qu,_inputObserver:Om,_scrollers:it,_proxies:yi,bridge:{ss:function(){ri||ss("scrollStart"),ri=on()},ref:function(){return sn}}};bm()&&be.registerPlugin(Qe);wl.registerPlugin(Qe);const Yi=matchMedia("(prefers-reduced-motion: reduce)").matches,qf=document.querySelector(".experience"),zi=document.querySelector(".stage"),Rd=document.querySelector(".visuals"),Or=Object.fromEntries([...document.querySelectorAll("[data-layer]")].map(r=>[r.dataset.layer,r])),Bm=[...document.querySelectorAll("[data-moment]")],ze={idleOne:document.querySelector("#idle-video-one"),idleTwo:document.querySelector("#idle-video-two"),journeyFrame:document.querySelector("#journey-frame"),robotFrame:document.querySelector("#robot-frame"),robotTransitionFrame:document.querySelector("#robot-transition-frame"),robotExterior:document.querySelector("#robot-exterior-video")},zm=globalThis.__ARKAV_ENTRY_FRAMES__||[],km=globalThis.__ARKAV_ROBOT_AFK_FRAMES__||[],Hm=globalThis.__ARKAV_ROBOT_TRANSITION_FRAMES__||[],Cd=new Set;function Yf(r){if(!r.length)return;const e=innerWidth<720?8:18;let t=0;const n=()=>{const i=Math.min(r.length,t+e);for(;t<i;t+=1){const s=r[t];if(Cd.has(s))continue;Cd.add(s);const o=new Image;o.decoding="async",o.loading="eager",o.fetchPriority=t<e?"high":"low",o.src=s}t<r.length&&(globalThis.requestIdleCallback||(o=>setTimeout(o,120)))(n,{timeout:900})};n()}Yf(zm);Yf(km);Yf(Hm);const Xy=document.querySelector("#chapter-number"),qy=document.querySelector("#chapter-name"),Yy=document.querySelector("#rail-progress"),$y=document.querySelector("#loader"),Vm=document.querySelector("#load-value"),Sr=document.querySelector("#boot-trigger"),Gm=document.querySelector("#enter-ship"),Wm=document.querySelector("#return-ship"),Ky=document.querySelector(".site-header");document.querySelector(".hero-moment");const Zy=document.querySelector("#hero-title"),jy=document.querySelector("#hero-description"),Ll=[...document.querySelectorAll(".typed-moment")].map(r=>({element:r,title:r.querySelector(".moment-title")||Zy,description:r.querySelector(".moment-description")||jy,action:r.querySelector(".robot-action"),index:Number(r.dataset.moment),titles:r.dataset.titles?.split("|").filter(Boolean),descriptions:r.dataset.descriptions?.split("|").filter(Boolean)})),Qr=[...document.querySelectorAll(".portfolio-card")],Bc=document.querySelector(".robot-message"),Xm=document.querySelector(".robot-reply"),Za=Xm?.querySelector("p"),zc=Xm?.dataset.replies?.split("|").filter(Boolean)||[];let kc=0,Hc=0,Vc=0;const Gc=[["01","ORBIT"],["02","PASSAGE"],["03","INNER DECK"],["04","OUTER DECK"]],ja=["فراتر از یک سایت؛ تجربه‌ای از آینده.","ایده‌های بزرگ، شایسته تجربه‌های متفاوت‌اند.","هوش مصنوعی را به قلب کسب‌وکارت می‌آوریم.","وب‌سایتی که فقط دیده نمی‌شود؛ به خاطر می‌ماند.","هر کلیک، آغاز یک ارتباط هوشمند.","از اولین پیکسل تا آخرین فرایند.","کسب‌وکارت را برای فردا آماده کن.","مرز میان طراحی و هوش را از بین می‌بریم."],Ja=["وب‌سایت‌های هوشمند و اتوماسیون‌هایی می‌سازم که کسب‌وکار شما را سریع‌تر، دقیق‌تر و همیشه فعال نگه می‌دارند.","تجربه‌ای اختصاصی که هویت برند تو را به یک دنیای دیجیتال زنده تبدیل می‌کند.","از پاسخ‌گویی واتساپ و اینستاگرام تا فروش و پیگیری مشتری، همه‌چیز می‌تواند خودکار باشد.","طراحی، کد و هوش مصنوعی در یک سیستم منسجم کنار هم قرار می‌گیرند.","بازدیدکننده را درگیر می‌کنیم، مسیر را ساده می‌کنیم و او را به مشتری تبدیل می‌کنیم.","ایجنت‌های هوشمند بدون توقف برای تیم تو فکر می‌کنند، پاسخ می‌دهند و کار انجام می‌دهند.","هر فرایند تکراری می‌تواند به یک جریان سریع، دقیق و قابل‌اندازه‌گیری تبدیل شود.","محصولی می‌سازیم که امروز متفاوت باشد و فردا همچنان جلوتر از رقبا حرکت کند."];let Gt=!1,Go=!1,Pd=0,mi=0,nr=!1,$s=0,os=0,xo=0,So=0,as=0,Dr=0;const Br=r=>new Promise(e=>window.setTimeout(e,r));function Ul(r){r&&(r.replaceChildren(),r.classList.remove("is-typing"))}function Dd(r,e){const t=e.trim().split(/\s+/).filter(Boolean);return r.replaceChildren(...t.map(n=>{const i=document.createElement("span");return i.className="typed-word",i.textContent=n,i})),[...r.children]}function Ld(r){return r.trim().split(/\s+/).filter(Boolean).map(e=>{const t=document.createElement("span");return t.className="typed-word",t.textContent=e,t})}function Ps(r,e){return e===os&&Gt&&as===r.index}async function Jy(r,e,t,n=155){for(const i of r){if(!Ps(t,e))return!1;i.classList.add("is-typed"),await Br(n)}return!0}async function Qy(r,e,t,n,i,s){const o=r.title.textContent.trim()===e.trim()&&r.description.textContent.trim()===t.trim()&&r.title.children.length>0,a=o?[...r.title.children]:Dd(r.title,e),l=o?[...r.description.children]:Dd(r.description,t);if(r.title.classList.add("is-typing"),r.description.classList.remove("is-typing"),r.action?.classList.remove("is-revealed"),Yi)return a.forEach(_=>_.classList.add("is-typed")),l.forEach(_=>_.classList.add("is-typed")),r.title.classList.remove("is-typing"),!0;if(!o&&!await Jy(a,s,r))return!1;r.title.classList.remove("is-typing"),await Br(420);for(let _=0;_<l.length;_+=1){if(!Ps(r,s))return!1;l[_].classList.add("is-typed"),await Br(142)}if(r.action?.classList.add("is-revealed"),await Br(5e3),!Ps(r,s))return!1;const c=Ld(n),u=Ld(i),f=r.title,d=r.description,h=a;f.replaceChildren(...h,...c),h.forEach(_=>{_.classList.remove("is-faded"),_.classList.add("is-typed")}),c.forEach(_=>_.classList.remove("is-typed")),d.replaceChildren(...l);for(let _=0;_<h.length;_+=1){if(!Ps(r,s))return!1;h[_].classList.add("is-faded"),_>=3&&c[_-3]&&c[_-3].classList.add("is-typed"),await Br(185)}for(const _ of c){if(!Ps(r,s))return!1;_.classList.add("is-typed"),await Br(155)}h.forEach(_=>_.remove()),f.classList.remove("is-typing"),d.replaceChildren(...l),d.classList.add("is-typing");for(const _ of u){if(!Ps(r,s))return!1;_.classList.add("is-typed"),await Br(142)}return d.classList.remove("is-typing"),!0}async function eE(r,e=0){const t=Ll.find(n=>n.index===e)||Ll[0];if(t)for(;r===os&&Gt&&as===t.index;){const n=t.index===0?ja[xo]:t.titles?.[Dr%t.titles.length]||t.element.dataset.title,i=t.index===0?Ja[So]:t.descriptions?.[Dr%t.descriptions.length]||t.element.dataset.description,s=t.index===0?ja[(xo+1)%ja.length]:t.titles?.[(Dr+1)%t.titles.length]||t.element.dataset.title,o=t.index===0?Ja[(So+1)%Ja.length]:t.descriptions?.[(Dr+1)%t.descriptions.length]||t.element.dataset.description;if(!await Qy(t,n,i,s,o,os))return;xo=t.index===0?(xo+1)%ja.length:xo,So=t.index===0?(So+1)%Ja.length:So,Dr=t.index===4?Dr+1:Dr,t.action?.classList.remove("is-revealed")}}function ml(r){as=r,os+=1,Ll.forEach(e=>{Ul(e.title),Ul(e.description),e.action?.classList.remove("is-revealed")}),Gt&&eE(os,r)}function es({startTyping:r=!0}={}){Gt||(Gt=!0,os+=1,document.body.classList.add("boot-active","boot-complete"),document.body.classList.remove("boot-pending","interface-hidden"),Sr.classList.add("is-activated"),Sr.setAttribute("aria-label","مخفی‌کردن نوشته‌های ARKAV"),Ky.removeAttribute("aria-hidden"),Bm.forEach(e=>e.removeAttribute("aria-hidden")),Qe.refresh(),r&&ml(as))}function Wo(){Gt&&(Gt=!1,os+=1,Ll.forEach(r=>{Ul(r.title),Ul(r.description)}),document.body.classList.remove("boot-active","boot-complete"),document.body.classList.add("interface-hidden"),Sr.classList.remove("is-activated"),Sr.setAttribute("aria-label","نمایش نوشته‌های ARKAV"))}function Wc(r){const t=[0,.34,.7,1][Math.min(3,Math.max(0,r))],n=window.scrollY,s=Math.max(0,qf.offsetHeight-innerHeight)*t,o=performance.now(),a=2600;window.cancelAnimationFrame($s);const l=c=>{const u=Math.min(1,(c-o)/a),f=u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2;window.scrollTo(0,n+(s-n)*f),u<1&&($s=requestAnimationFrame(l))};$s=requestAnimationFrame(l)}function qm(){$s&&(window.cancelAnimationFrame($s),$s=0)}function tE(){if(!(performance.now()-Pd<260)){if(Pd=performance.now(),mi===0){Gt?(Wo(),mi=1,Wc(2)):es();return}if(mi!==1){if(mi===2){Gt?(Wo(),mi=3,lf(3),Wc(3)):es();return}if(mi===3){if(!Gt){es();return}Wo(),mi=2,lf(2),Wc(2)}}}}function lf(r){const e=Math.min(Gc.length-1,Math.max(0,r));Xy.textContent=Gc[e][0],qy.textContent=Gc[e][1]}zi.addEventListener("click",r=>{document.body.classList.contains("boot-ready")&&(r.target.closest("a, button, .portfolio-card")||(r.preventDefault(),r.stopPropagation(),tE()))},!0);let cf=0;function Wl(r=1){if(!Gt||cf)return;Sr.classList.add("is-autopilot"),(()=>{cf=0;const t=window.scrollY,n=r>0?Math.max(0,qf.offsetHeight-innerHeight):0,i=performance.now(),s=6400,o=a=>{const l=Math.min(1,(a-i)/s),c=l<.5?2*l*l:1-Math.pow(-2*l+2,2)/2;window.scrollTo(0,t+(n-t)*c),l<1?requestAnimationFrame(o):Sr.classList.remove("is-autopilot")};requestAnimationFrame(o)})()}zi.addEventListener("wheel",r=>{if(qm(),cf)return;const e=window.scrollY<=2,t=window.scrollY+innerHeight>=document.documentElement.scrollHeight-2;e&&r.deltaY<0?(r.preventDefault(),Wl()):t&&r.deltaY>0&&r.preventDefault()},{passive:!1});zi.addEventListener("touchstart",qm,{passive:!0});Sr.addEventListener("click",r=>{r.stopPropagation(),Gt?Wo():es()});document.querySelector(".journey-link")?.addEventListener("click",r=>{r.preventDefault(),Gt||es(),Wl()});Gm?.addEventListener("click",()=>{Gt||es(),Wl()});Wm?.addEventListener("click",()=>{Gt||es(),Wl(-1)});function nE(r,e=0,t=1){return Math.min(t,Math.max(e,r))}function ir(r,e,t){return nE((r-e)/(t-e))}function iE(r,e,t,n){return r<=e||r>=n?0:r<t?ir(r,e,t):1-ir(r,t,n)}function Fs(r,e,t=1){const n=Or[r];n.style.opacity=e.toFixed(3),n.style.visibility=e<.004?"hidden":"visible";const i=r==="robot"?"0px, 0px":"var(--mx), var(--my)";n.style.transform=`scale(${t}) translate3d(${i}, 0)`}let oo=!1;function rE(){Yi||oo||Go||mi<2||!ze.robotFrame||(oo=!0,ze.robotFrame.dataset.afk="0",ze.robotTransitionFrame&&(ze.robotTransitionFrame.style.opacity="0"))}function sE(){oo=!1,ze.robotFrame&&(ze.robotFrame.dataset.afk="0")}function Xc(r){ze.robotExterior&&(ze.robotExterior.pause(),ze.robotExterior.style.opacity="0")}function oE(r){const e=Math.min(324,Math.max(1,Math.round(r))),t=Hm[e-1]||`./nova-v2/robot-transition-frames/frame-${String(e).padStart(3,"0")}.webp`;ze.robotTransitionFrame&&ze.robotTransitionFrame.dataset.frame!==String(e)&&(ze.robotTransitionFrame.src=t,ze.robotTransitionFrame.dataset.frame=String(e))}function aE(r){if(r<.86){nr||(ze.robotTransitionFrame&&(ze.robotTransitionFrame.style.opacity="0"),ze.robotFrame&&(ze.robotFrame.style.opacity="1"));return}if(r<.985){nr=!1,oo=!1,ze.robotFrame&&(ze.robotFrame.style.opacity="0"),ze.robotExterior&&(ze.robotExterior.style.opacity="0"),ze.robotExterior?.pause(),ze.robotTransitionFrame&&(ze.robotTransitionFrame.style.opacity="1");const n=ir(r,.86,.985);oE(84+n*96);return}nr=!0,ze.robotFrame&&(ze.robotFrame.style.opacity="0"),ze.robotTransitionFrame&&(ze.robotTransitionFrame.style.opacity="0"),ze.robotExterior&&(ze.robotExterior.style.opacity="1",ze.robotExterior.loop=!0,ze.robotExterior.paused&&ze.robotExterior.play().catch(()=>{}))}let Ym=0,qc=0,Os=0,Ud=1,Id=performance.now(),Il=!0;function lE(r){r!==Il&&(Il=r,r&&!Yi?(ze.idleOne.play().catch(()=>{}),ze.idleTwo.play().catch(()=>{})):(ze.idleOne.pause(),ze.idleTwo.pause()))}function Mo(r,e){const t=Bm[r];t.style.opacity=e.toFixed(3),t.style.visibility=e<.02?"hidden":"visible",t.style.transform=`translate3d(0, ${(1-e)*30}px, 0)`,t.classList.toggle("is-visible",e>=.02)}const cE={"portfolio-lena":[["./nova-v2/portfolio/lena/lena-1.jpg","هویت بصری شخصی، مسیر معرفی خدمات و ارتباط سریع با مخاطب."],["./nova-v2/portfolio/lena/lena-2.jpg","صفحه‌ای مینیمال با تمرکز روی اعتماد، خوانایی و تجربه‌ی موبایل."],["./nova-v2/portfolio/lena/lena-3.jpg","گالری پروژه‌ها با روایت تصویری و حرکت نرم بین جزئیات."]],"portfolio-mg":[["./nova-v2/portfolio/mg/mg-1.webp","ساختار ورزشی با تمرکز روی برنامه‌ها، اعتمادسازی و ثبت‌نام."],["./nova-v2/portfolio/mg/mg-2.webp","مسیر تبدیل بازدیدکننده به عضو با CTAهای واضح و تجربه‌ی سریع."],["./nova-v2/portfolio/mg/mg-3.webp","فضای پرانرژی باشگاه برای ساخت اعتماد و انگیزه‌ی بیشتر."]]};let Xo=0,Po=0;function Nd(r){Qr.forEach(e=>e.classList.toggle("is-open",e===r))}function Qa(r=1){const e=Qr.find(a=>a.classList.contains("is-open"));if(!e)return;const t=cE[e.classList[1]]||[];if(!t.length)return;Xo=(Xo+r+t.length)%t.length;const[n,i]=t[Xo],s=e.querySelector(".portfolio-gallery-image");s&&(s.src=n);const o=e.querySelector(".portfolio-detail");o&&(o.textContent=i)}Qr.forEach(r=>{r.addEventListener("click",e=>{e.target.closest(".portfolio-gallery-control")||r.classList.contains("is-open")||(e.preventDefault(),Nd(r),Xo=0,Qa(0),window.clearInterval(Po),Po=window.setInterval(()=>Qa(1),4200))}),r.querySelectorAll(".portfolio-gallery-control").forEach(e=>{const t=n=>{n.preventDefault(),n.stopPropagation();const i=r.classList.contains("is-open");Nd(r);const s=e.classList.contains("portfolio-gallery-next")?1:-1;i||(Xo=0),Qa(s),window.clearInterval(Po),Po=window.setInterval(()=>Qa(1),4200)};e.addEventListener("click",t),e.addEventListener("pointerdown",n=>{n.stopPropagation()},{passive:!0}),e.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&t(n)})})});function uE(r){window.clearInterval(kc),window.clearTimeout(Hc),window.clearInterval(Po),kc=0,Hc=0,Qr.forEach(e=>e.classList.remove("is-open")),Qr.forEach(e=>{e.style.removeProperty("--portfolio-image")}),Bc?.classList.toggle("cards-visible",r),!(!r||Yi)&&(kc=window.setInterval(()=>{!Gt||as!==4||(Fd(),Bc.classList.add("cards-visible"),Hc=window.setTimeout(()=>{Qr.some(e=>e.classList.contains("is-open"))||Bc.classList.remove("cards-visible")},4200))},7600),Fd())}function Fd(){!Za||!zc.length||(Za.classList.add("reply-refreshing"),window.setTimeout(()=>{Vc=(Vc+1)%zc.length,Za.textContent=zc[Vc],Za.classList.remove("reply-refreshing")},220))}zi.addEventListener("click",r=>{r.target.closest(".portfolio-card")||Qr.forEach(e=>e.classList.remove("is-open"))});let Od=-1;function uf(r){const e=1-ir(r,.005,.08),t=iE(r,.035,.2,.64),n=r<.54?0:Math.min(1,ir(r,.54,.64));lE(r<.025),Fs("idleOne",e*(1-Os),1.01),Fs("idleTwo",e*Os,1.01),Fs("journey",t,1.005),Ym=ir(r,.04,.62),Fs("robot",Math.max(n,nr?1:0),1+ir(r,.78,1)*.018),n>.06&&!Yi?rE():n<=.06&&oo&&sE(),Mo(0,1-ir(r,.018,.095)),Mo(1,0),Mo(2,0),Mo(3,0),Mo(4,mi>=2?Number(Gt):0);const i=r<.08?0:r<.54?1:r<.9?2:3;i!==Od&&(Od=i,nr||(mi=i),lf(i),i===0&&(as=0),i>=2&&(as=4),i<2?(nr=!1,ze.robotExterior&&!Go&&Xc(),Gt&&i===0?ml(0):i!==0&&Wo()):i===2?(nr=!1,ze.robotExterior&&!Go&&Xc(),Gt&&ml(4)):i===3&&(r<.9&&!Go&&(nr=!1,Xc()),Gt&&ml(4)),uE(i>=2)),aE(r),Yy.style.transform=`scaleY(${r})`,zi.style.setProperty("--sequence",r.toFixed(4))}Yi?(uf(0),Object.values(ze).filter(r=>r?.pause).forEach(r=>r.pause())):Qe.create({trigger:qf,start:"top top",end:"bottom bottom",scrub:1.15,onUpdate:({progress:r})=>uf(r)});const fE=document.querySelector("#fx-canvas"),$m=new pg,Nl=new Qn(55,innerWidth/innerHeight,.1,100);Nl.position.z=7;const Xl=new oM({canvas:fE,alpha:!0,antialias:!1,powerPreference:"high-performance"});Xl.setSize(innerWidth,innerHeight);Xl.setPixelRatio(Math.min(devicePixelRatio,1.5));const Km=innerWidth<720?240:520,_l=new Float32Array(Km*3);for(let r=0;r<Km;r+=1)_l[r*3]=(Math.random()-.5)*18,_l[r*3+1]=(Math.random()-.5)*11,_l[r*3+2]=-Math.random()*18;const Zm=new qi;Zm.setAttribute("position",new hi(_l,3));const Ds=new vg(Zm,new cp({color:11136255,size:.026,transparent:!0,opacity:.74,blending:$c,depthWrite:!1}));$m.add(Ds);let Ci=0,Pi=0,$f=0,Kf=0;addEventListener("pointermove",r=>{Yi||r.pointerType==="touch"||($f=r.clientX/innerWidth-.5,Kf=r.clientY/innerHeight-.5)});addEventListener("pointerleave",()=>{$f=0,Kf=0});const hE=new Eg;function jm(){const r=hE.getElapsedTime(),e=performance.now();if(Yi)Ci=0,Pi=0,Rd.style.transform="none",zi.style.setProperty("--mx","0px"),zi.style.setProperty("--my","0px"),Or.robot.style.transform="none",Or.robot.style.removeProperty("--robot-look-x"),Or.robot.style.removeProperty("--robot-look-y");else{Ci+=($f-Ci)*.075,Pi+=(Kf-Pi)*.075;const n=Ci*-46,i=Pi*-34;Rd.style.transform=`scale(1.09) translate3d(${n}px, ${i}px, 0)`,zi.style.setProperty("--mx",`${Ci*-15}px`),zi.style.setProperty("--my",`${Pi*-11}px`);const s=Ci*48,o=Pi*34,a=Ci*-7.5,l=Pi*5.2;Or.robot.style.transform=`scale(1.07) translate3d(${s}px, ${o}px, 0) rotateY(${a}deg) rotateX(${l}deg)`,Or.robot.style.setProperty("--robot-look-x",`${Ci*10}deg`),Or.robot.style.setProperty("--robot-look-y",`${Pi*-7}deg`)}Il&&e-Id>5200&&(Ud*=-1,Id=e);const t=Ud>0?1:0;if(Os+=(t-Os)*.018,Il&&(Fs("idleOne",1-Os,1.01),Fs("idleTwo",Os,1.01)),ze.journeyFrame){qc+=(Ym-qc)*.28;const n=Math.min(201,Math.max(1,Math.round(qc*200)+1)),i=zm[n-1]||`./nova-v2/entry-frames/frame-${String(n).padStart(3,"0")}.webp`;ze.journeyFrame.dataset.frame!==String(n)&&(ze.journeyFrame.src=i,ze.journeyFrame.dataset.frame=String(n))}if(ze.robotFrame&&oo&&!Go){const n=(Math.sin(r*.22)+1)*.5,i=Math.min(300,Math.max(1,Math.round(n*299)+1)),s=km[i-1]||`./nova-v2/robot-afk-frames/frame-${String(i).padStart(3,"0")}.webp`;ze.robotFrame.dataset.frame!==String(i)&&(ze.robotFrame.src=s,ze.robotFrame.dataset.frame=String(i))}Ds.rotation.z=r*.007,Ds.rotation.y+=(Ci*.045-Ds.rotation.y)*.025,Ds.rotation.x+=(Pi*.025-Ds.rotation.x)*.025,Xl.render($m,Nl),requestAnimationFrame(jm)}jm();addEventListener("resize",()=>{Nl.aspect=innerWidth/innerHeight,Nl.updateProjectionMatrix(),Xl.setSize(innerWidth,innerHeight),Qe.refresh()});addEventListener("scroll",()=>{const r=window.scrollY+innerHeight>=document.documentElement.scrollHeight-8;Gm?.classList.toggle("is-hidden",r),Wm?.classList.toggle("is-hidden",!r)});const dE=(r,e=4500)=>new Promise(t=>{if(r.readyState>=1){t();return}let n=!1;const i=()=>{n||(n=!0,clearTimeout(s),r.removeEventListener("loadedmetadata",i),r.removeEventListener("canplay",i),r.removeEventListener("error",i),t())},s=window.setTimeout(i,e);r.addEventListener("loadedmetadata",i,{once:!0}),r.addEventListener("canplay",i,{once:!0}),r.addEventListener("error",i,{once:!0}),r.load()}),pE=Object.values(ze).filter(r=>r?.load).map(r=>dE(r));let Yc=0;const mE=setInterval(()=>{Yc=Math.min(92,Yc+Math.ceil(Math.random()*8)),Vm.textContent=`${Yc}%`},120);let Bd=!1;const Jm=()=>{Bd||(Bd=!0,clearInterval(mE),Vm.textContent="100%",uf(0),setTimeout(()=>{$y.classList.add("is-hidden"),Sr.disabled=!1,document.body.classList.add("boot-ready"),Yi||(ze.idleOne.play().catch(()=>{}),ze.idleTwo.play().catch(()=>{}))},280))};Promise.all(pE).then(Jm);window.setTimeout(Jm,5500);wl.utils.toArray(".project").forEach(r=>{wl.from(r,{y:80,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 84%",once:!0}})});
