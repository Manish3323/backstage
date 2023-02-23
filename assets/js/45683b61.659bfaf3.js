/*! For license information please see 45683b61.659bfaf3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[240418],{603905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,b=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(b,i(i({ref:t},d),{},{components:a})):n.createElement(b,i({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},343729:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});a(827378);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"url-reader",title:"URL Reader",sidebar_label:"URL Reader",description:"URL Reader is a backend core API responsible for reading files from external locations."},s=void 0,l={unversionedId:"plugins/url-reader",id:"plugins/url-reader",title:"URL Reader",description:"URL Reader is a backend core API responsible for reading files from external locations.",source:"@site/../docs/plugins/url-reader.md",sourceDirName:"plugins",slug:"/plugins/url-reader",permalink:"/docs/plugins/url-reader",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/url-reader.md",tags:[],version:"current",frontMatter:{id:"url-reader",title:"URL Reader",sidebar_label:"URL Reader",description:"URL Reader is a backend core API responsible for reading files from external locations."},sidebar:"docs",previous:{title:"Call Existing API",permalink:"/docs/plugins/call-existing-api"},next:{title:"Testing with Jest",permalink:"/docs/plugins/testing"}},c={},d=[{value:"Concept",id:"concept",level:2},{value:"Interface",id:"interface",level:2},{value:"Using a URL Reader inside a plugin",id:"using-a-url-reader-inside-a-plugin",level:2},{value:"Writing a new URL Reader",id:"writing-a-new-url-reader",level:2},{value:"1. Add an integration",id:"1-add-an-integration",level:3},{value:"2. Create the URL Reader",id:"2-create-the-url-reader",level:3},{value:"3. Implement the methods",id:"3-implement-the-methods",level:3},{value:"<code>readUrl</code>",id:"readurl",level:4},{value:"<code>readTree</code>",id:"readtree",level:4},{value:"search",id:"search",level:4},{value:"4. Add to available URL Readers",id:"4-add-to-available-url-readers",level:3},{value:"5. Caching",id:"5-caching",level:3},{value:"6. Debugging",id:"6-debugging",level:3}],p={toc:d};function u(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",r({},{id:"concept"}),"Concept"),(0,n.kt)("p",null,"Some of the core plugins of Backstage have to read files from an external\nlocation. ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/features/software-catalog/"}),"Software Catalog")," has to read\nthe ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/features/software-catalog/descriptor-format"}),(0,n.kt)("inlineCode",{parentName:"a"},"catalog-info.yaml")),"\nentity descriptor files to register and track an entity.\n",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/features/software-templates/"}),"Software Templates")," have to download\nthe template skeleton files before creating a new component.\n",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/features/techdocs/"}),"TechDocs")," has to download the markdown source\nfiles before generating a documentation site."),(0,n.kt)("p",null,"Since, the requirement for reading files is so essential for Backstage plugins,\nthe\n",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/tree/master/packages/backend-common"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/backend-common")),'\npackage provides a dedicated API for reading from such URL based remote\nlocations like GitHub, GitLab, Bitbucket, Google Cloud Storage, etc. This is\ncommonly referred to as "URL Reader". It takes care of making authenticated\nrequests to the remote host so that private files can be read securely. If users\nhave ',(0,n.kt)("a",r({parentName:"p"},{href:"/docs/integrations/github/github-apps"}),"GitHub App based authentication")," set up, URL Reader even\nrefreshes the token, to avoid reaching the GitHub API rate limit."),(0,n.kt)("p",null,"As a result, plugin authors do not have to worry about any of these problems\nwhen trying to read files."),(0,n.kt)("h2",r({},{id:"interface"}),"Interface"),(0,n.kt)("p",null,"When the Backstage backend starts, a new instance of URL Reader is created. You\ncan see this in the index file of your Backstage backend\ni.e.",(0,n.kt)("inlineCode",{parentName:"p"},"packages/backend/src/index.ts"),".\n",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/ebbe91dbe79038a61d35cf6ed2d96e0e0d5a15f3/packages/backend/src/index.ts#L57"}),"Example")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"// File: packages/backend/src/index.ts\n\nimport { UrlReaders } from '@backstage/backend-common';\n\nfunction makeCreateEnv(config: Config) {\n  // ....\n  const reader = UrlReaders.default({ logger: root, config });\n  //\n}\n")),(0,n.kt)("p",null,"This instance contains all\n",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/master/packages/backend-common/src/reading/UrlReaders.ts"}),"the default URL Reader providers"),"\nin the backend-common package including GitHub, GitLab, Bitbucket, Azure, Google\nGCS. As the need arises, more URL Readers are being written to support different\nproviders."),(0,n.kt)("p",null,"The generic interface of a URL Reader instance looks like this."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"export type UrlReader = {\n  /* Used to read a single file and return its content. */\n  readUrl(url: string, options?: ReadUrlOptions): Promise<ReadUrlResponse>;\n  /* Used to read a file tree and download as a directory. */\n  readTree(url: string, options?: ReadTreeOptions): Promise<ReadTreeResponse>;\n  /* Used to search a file in a tree. */\n  search(url: string, options?: SearchOptions): Promise<SearchResponse>;\n};\n")),(0,n.kt)("h2",r({},{id:"using-a-url-reader-inside-a-plugin"}),"Using a URL Reader inside a plugin"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"reader")," instance is available in the backend plugin environment and passed\non to all the backend plugins. You can see an\n",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/b0be185369ebaad22255b7cdf18535d1d4ffd0e7/packages/backend/src/plugins/techdocs.ts#L31"}),"example"),".\nWhen any of the methods on this instance is called with a URL, URL Reader\nextracts the host for that URL (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"github.com"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ghe.mycompany.com"),", etc.).\nUsing the\n",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/tree/master/packages/integration"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/integration")),"\npackage, it looks inside the\n",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/d5c83bb889b8142e343ebc4e4c0b90a02d1c1a3d/app-config.yaml#L134-L158"}),(0,n.kt)("inlineCode",{parentName:"a"},"integrations:")),"\nconfig of the ",(0,n.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," to find out how to work with the host based on\nthe configs provided like authentication token, API base URL, etc."),(0,n.kt)("p",null,"Make sure your plugin-specific backend file at\n",(0,n.kt)("inlineCode",{parentName:"p"},"packages/backend/src/plugins/<PLUGIN>.ts")," is forwarding the ",(0,n.kt)("inlineCode",{parentName:"p"},"reader")," instance\npassed on as the ",(0,n.kt)("inlineCode",{parentName:"p"},"PluginEnvironment")," to the actual plugin's ",(0,n.kt)("inlineCode",{parentName:"p"},"createRouter"),"\nfunction. See how this is done in\n",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/d5c83bb889b8142e343ebc4e4c0b90a02d1c1a3d/packages/backend/src/plugins/catalog.ts#L25-L27"}),"Catalog"),"\nand\n",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/d5c83bb889b8142e343ebc4e4c0b90a02d1c1a3d/packages/backend/src/plugins/techdocs.ts#L31-L36"}),"TechDocs"),"\nbackend plugins."),(0,n.kt)("p",null,"Once the reader instance is available inside the plugin, one of its methods can\ndirectly be used with a URL. Some example usages -"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://github.com/backstage/backstage/blob/a7607b5/plugins/catalog-backend/src/modules/codeowners/lib/read.ts#L24-L33"}),(0,n.kt)("inlineCode",{parentName:"a"},"readUrl"))," -\nCatalog using the ",(0,n.kt)("inlineCode",{parentName:"li"},"readUrl")," method to read the CODEOWNERS file in a repository."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://github.com/backstage/backstage/blob/84a8788/plugins/techdocs-node/src/helpers.ts#L146-L167"}),(0,n.kt)("inlineCode",{parentName:"a"},"readTree"))," -\nTechDocs using the ",(0,n.kt)("inlineCode",{parentName:"li"},"readTree")," method to download markdown files in order to\ngenerate the documentation site."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://github.com/backstage/backstage/blob/cb4f0e4/plugins/techdocs-node/src/stages/prepare/url.ts#L51-L73"}),(0,n.kt)("inlineCode",{parentName:"a"},"readTree"))," -\nTechDocs using ",(0,n.kt)("inlineCode",{parentName:"li"},"NotModifiedError")," to maintain cache and speed up and limit the\nnumber of requests."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://github.com/backstage/backstage/blob/d5c83bb889b8142e343ebc4e4c0b90a02d1c1a3d/plugins/catalog-backend/src/ingestion/processors/UrlReaderProcessor.ts#L88-L108"}),(0,n.kt)("inlineCode",{parentName:"a"},"search"))," -\nCatalog using the ",(0,n.kt)("inlineCode",{parentName:"li"},"search")," method to find files for a location URL containing\na glob pattern.")),(0,n.kt)("h2",r({},{id:"writing-a-new-url-reader"}),"Writing a new URL Reader"),(0,n.kt)("p",null,"If the available URL Readers are not sufficient for your use case and you want\nto add a new URL Reader for any other provider, you are most welcome to\ncontribute one!"),(0,n.kt)("p",null,"Feel free to use the\n",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/d5c83bb889b8142e343ebc4e4c0b90a02d1c1a3d/packages/backend-common/src/reading/GithubUrlReader.ts"}),"GitHub URL Reader"),"\nas a source of inspiration."),(0,n.kt)("h3",r({},{id:"1-add-an-integration"}),"1. Add an integration"),(0,n.kt)("p",null,'The provider for your new URL Reader can also be called an "integration" in\nBackstage. The ',(0,n.kt)("inlineCode",{parentName:"p"},"integrations:")," section of your Backstage ",(0,n.kt)("inlineCode",{parentName:"p"},"app-config.yaml"),"\nconfig file is supposed to be the place where a Backstage integrator defines the\nhost URL for the integration, authentication details and other integration\nrelated configurations."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@backstage/integration"),' package is where most of the integration specific\ncode lives, so that it is shareable across Backstage. Functions like "read the\nintegrations config and process it", "construct headers for authenticated\nrequests to the host" or "convert a plain file URL into its API URL for\ndownloading the file" would live in this package.'),(0,n.kt)("h3",r({},{id:"2-create-the-url-reader"}),"2. Create the URL Reader"),(0,n.kt)("p",null,"Create a new class which implements the\n",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/d5c83bb889b8142e343ebc4e4c0b90a02d1c1a3d/packages/backend-common/src/reading/types.ts#L21-L28"}),(0,n.kt)("inlineCode",{parentName:"a"},"UrlReader")," type"),"\ninside ",(0,n.kt)("inlineCode",{parentName:"p"},"@backstage/backend-common"),". Create and export a static ",(0,n.kt)("inlineCode",{parentName:"p"},"factory")," method\nwhich reads the integration config and returns a map of host URLs the new reader\nshould be used for. See the\n",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/d5c83bb889b8142e343ebc4e4c0b90a02d1c1a3d/packages/backend-common/src/reading/GithubUrlReader.ts#L50-L63"}),"GitHub URL Reader"),"\nfor example."),(0,n.kt)("h3",r({},{id:"3-implement-the-methods"}),"3. Implement the methods"),(0,n.kt)("p",null,"We want to make sure all URL Readers behave in the same way. Hence if possible,\nall the methods of the ",(0,n.kt)("inlineCode",{parentName:"p"},"UrlReader")," interface should be implemented. However it\nis okay to start by implementing just one of them and create issues for the\nremaining."),(0,n.kt)("h4",r({},{id:"readurl"}),(0,n.kt)("inlineCode",{parentName:"h4"},"readUrl")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readUrl")," method expects a user-friendly URL, something which can be copied from\nthe browser naturally when a person is browsing the provider in their browser."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2705 Valid URL :\n",(0,n.kt)("inlineCode",{parentName:"li"},"https://github.com/backstage/backstage/blob/master/ADOPTERS.md")),(0,n.kt)("li",{parentName:"ul"},"\u274c Not a valid URL :\n",(0,n.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/backstage/backstage/master/ADOPTERS.md")),(0,n.kt)("li",{parentName:"ul"},"\u274c Not a valid URL : ",(0,n.kt)("inlineCode",{parentName:"li"},"https://github.com/backstage/backstage/ADOPTERS.md"))),(0,n.kt)("p",null,"Upon receiving the URL, ",(0,n.kt)("inlineCode",{parentName:"p"},"readUrl")," converts the user-friendly URL into an API URL\nwhich can be used to request the provider's API."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readUrl")," then makes an authenticated request to the provider API and returns the response containing the file's contents and ETag(if the provider supports it)."),(0,n.kt)("h4",r({},{id:"readtree"}),(0,n.kt)("inlineCode",{parentName:"h4"},"readTree")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"readTree")," method also expects user-friendly URLs similar to ",(0,n.kt)("inlineCode",{parentName:"p"},"read")," but the URL\nshould point to a tree (could be the root of a repository or even a\nsub-directory)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2705 Valid URL : ",(0,n.kt)("inlineCode",{parentName:"li"},"https://github.com/backstage/backstage")),(0,n.kt)("li",{parentName:"ul"},"\u2705 Valid URL : ",(0,n.kt)("inlineCode",{parentName:"li"},"https://github.com/backstage/backstage/blob/master")),(0,n.kt)("li",{parentName:"ul"},"\u2705 Valid URL : ",(0,n.kt)("inlineCode",{parentName:"li"},"https://github.com/backstage/backstage/blob/master/docs"))),(0,n.kt)("p",null,"Using the provider's API documentation, find out an API endpoint which can be\nused to download either a zip or a tarball. You can download the entire tree\n(e.g. a repository) and filter out in case the user is expecting only a\nsub-tree. But some APIs are smart enough to accept a path and return only a\nsub-tree in the downloaded archive."),(0,n.kt)("h4",r({},{id:"search"}),"search"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"search")," method expects a glob pattern of a URL and returns a list of files\nmatching the query."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2705 Valid URL :\n",(0,n.kt)("inlineCode",{parentName:"li"},"https://github.com/backstage/backstage/blob/master/**/catalog-info.yaml")),(0,n.kt)("li",{parentName:"ul"},"\u2705 Valid URL : ",(0,n.kt)("inlineCode",{parentName:"li"},"https://github.com/backstage/backstage/blob/master/**/*.md")),(0,n.kt)("li",{parentName:"ul"},"\u2705 Valid URL :\n",(0,n.kt)("inlineCode",{parentName:"li"},"https://github.com/backstage/backstage/blob/master/*/package.json")),(0,n.kt)("li",{parentName:"ul"},"\u2705 Valid URL : ",(0,n.kt)("inlineCode",{parentName:"li"},"https://github.com/backstage/backstage/blob/master/READM"))),(0,n.kt)("p",null,"The core logic of ",(0,n.kt)("inlineCode",{parentName:"p"},"readTree")," can be used here to extract all the files inside\nthe tree and return the files matching the pattern in the ",(0,n.kt)("inlineCode",{parentName:"p"},"url"),"."),(0,n.kt)("h3",r({},{id:"4-add-to-available-url-readers"}),"4. Add to available URL Readers"),(0,n.kt)("p",null,"There are two ways to make your new URL Reader available for use."),(0,n.kt)("p",null,"You can choose to make it open source, by updating the\n",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/d5c83bb889b8142e343ebc4e4c0b90a02d1c1a3d/packages/backend-common/src/reading/UrlReaders.ts#L62-L81"}),(0,n.kt)("inlineCode",{parentName:"a"},"default")," factory"),"\nmethod of URL Readers."),(0,n.kt)("p",null,"But for something internal which you don't want to make open source, you can\nupdate your ",(0,n.kt)("inlineCode",{parentName:"p"},"packages/backend/src/index.ts")," file and update how the ",(0,n.kt)("inlineCode",{parentName:"p"},"reader"),"\ninstance is created."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"// File: packages/backend/src/index.ts\nconst reader = UrlReaders.default({\n  logger: root,\n  config,\n  // This is where your internal URL Readers would go.\n  factories: [myCustomReader.factory],\n});\n")),(0,n.kt)("h3",r({},{id:"5-caching"}),"5. Caching"),(0,n.kt)("p",null,"All of the methods above support an ETag based caching. If the method is called\nwithout an ",(0,n.kt)("inlineCode",{parentName:"p"},"etag"),", the response contains an ETag of the resource (should ideally\nforward the ETag returned by the provider). If the method is called with an\n",(0,n.kt)("inlineCode",{parentName:"p"},"etag"),", it first compares the ETag and returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"NotModifiedError")," in case the\nresource has not been modified. This approach is very similar to the actual\n",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag"}),(0,n.kt)("inlineCode",{parentName:"a"},"ETag"))," and\n",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match"}),(0,n.kt)("inlineCode",{parentName:"a"},"If-None-Match")),"\nHTTP headers."),(0,n.kt)("h3",r({},{id:"6-debugging"}),"6. Debugging"),(0,n.kt)("p",null,"When debugging one of the URL Readers, you can straightforward use the\n",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/ebbe91dbe79038a61d35cf6ed2d96e0e0d5a15f3/packages/backend/src/index.ts#L57"}),(0,n.kt)("inlineCode",{parentName:"a"},"reader")," instance created"),"\nwhen the backend starts and call one of the methods with your debugging URL."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"// File: packages/backend/src/index.ts\n\nasync function main() {\n  // ...\n  const createEnv = makeCreateEnv(config);\n\n  const testReader = createEnv('test-url-reader').reader;\n  const response = await testReader.readUrl(\n    'https://github.com/backstage/backstage/blob/master/catalog-info.yaml',\n  );\n  console.log((await response.buffer()).toString());\n  // ...\n}\n")),(0,n.kt)("p",null,"This will be run every time you restart the backend. Note that after any change\nin the URL Reader code, you need to stop the backend and restart, since the\n",(0,n.kt)("inlineCode",{parentName:"p"},"reader")," instance is memoized and does not update on hot module reloading. Also,\nthere are a lot of unit tests written for the URL Readers, which you can make\nuse of."))}u.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(e,o){for(var i,s,l=r(e),c=1;c<arguments.length;c++){for(var d in i=Object(arguments[c]))a.call(i,d)&&(l[d]=i[d]);if(t){s=t(i);for(var p=0;p<s.length;p++)n.call(i,s[p])&&(l[s[p]]=i[s[p]])}}return l}},541535:(e,t,a)=>{var n=a(862525),r=60103,o=60106;var i=60109,s=60110,l=60112;var c=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;r=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),s=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),d=p("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function f(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||b}function m(){}function k(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||b}f.prototype.isReactComponent={},f.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},f.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=f.prototype;var y=k.prototype=new m;y.constructor=k,n(y,f.prototype),y.isPureReactComponent=!0;var v={current:null},R=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,a){var n,o={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)R.call(t,n)&&!N.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=a;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];o.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:r,type:e,key:i,ref:s,props:o,_owner:v.current}}function U(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,a,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case o:l=!0}}if(l)return i=i(l=e),e=""===n?"."+L(l,0):n,Array.isArray(i)?(a="",null!=e&&(a=e.replace(C,"$&/")+"/"),O(i,t,a,"",(function(e){return e}))):null!=i&&(U(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var d=n+L(s=e[c],c);l+=O(s,t,a,d,i)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),c=0;!(s=e.next()).done;)l+=O(s=s.value,t,a,d=n+L(s,c++),i);else if("object"===s)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function T(e,t,a){if(null==e)return e;var n=[],r=0;return O(e,n,"","",(function(e){return t.call(a,e,r++)})),n}function j(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function x(){var e=P.current;if(null===e)throw Error(h(321));return e}},827378:(e,t,a)=>{a(541535)}}]);