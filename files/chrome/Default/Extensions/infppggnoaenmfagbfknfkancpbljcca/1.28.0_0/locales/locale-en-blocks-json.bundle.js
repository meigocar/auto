"use strict";(self.webpackChunkautoma=self.webpackChunkautoma||[]).push([[194],{65934:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={collection:{blocks:{"export-result":{name:e=>{const{normalize:t}=e;return t(["Export result"])},description:e=>{const{normalize:t}=e;return t(["Export the collection result as JSON"])}}}},workflow:{blocks:{base:{title:e=>{const{normalize:t}=e;return t(["Blocks"])},moveToGroup:e=>{const{normalize:t}=e;return t(["Move block to blocks group"])},selector:e=>{const{normalize:t}=e;return t(["Element selector"])},selectorOptions:e=>{const{normalize:t}=e;return t(["Selector options"])},timeout:e=>{const{normalize:t}=e;return t(["Timeout (milliseconds)"])},noPermission:e=>{const{normalize:t}=e;return t(["Automa doesn't have enough permissions to perform this action"])},grantPermission:e=>{const{normalize:t}=e;return t(["Grant permission"])},action:e=>{const{normalize:t}=e;return t(["Action"])},element:{select:e=>{const{normalize:t}=e;return t(["Select an element"])},verify:e=>{const{normalize:t}=e;return t(["Verify selector"])}},settings:{title:e=>{const{normalize:t}=e;return t(["Block settings"])},blockTimeout:{title:e=>{const{normalize:t}=e;return t(["Block execution timeout (millisecond)"])},description:e=>{const{normalize:t}=e;return t(["The maximum execution time of the block (0 to disable)"])}},line:{title:e=>{const{normalize:t}=e;return t(["Lines"])},label:e=>{const{normalize:t}=e;return t(["Label"])},animated:e=>{const{normalize:t}=e;return t(["Animated"])},select:e=>{const{normalize:t}=e;return t(["Select line"])},to:e=>{const{normalize:t,interpolate:n,named:r}=e;return t(["Line to ",n(r("name"))," block"])},lineColor:e=>{const{normalize:t}=e;return t(["Color"])}}},toggle:{enable:e=>{const{normalize:t}=e;return t(["Enable block"])},disable:e=>{const{normalize:t}=e;return t(["Disable block"])}},onError:{info:e=>{const{normalize:t}=e;return t(["These rules will apply when an error occurs on the block"])},button:e=>{const{normalize:t}=e;return t(["On error"])},title:e=>{const{normalize:t}=e;return t(["On error occurs"])},retry:e=>{const{normalize:t}=e;return t(["Retry action"])},fallbackTitle:e=>{const{normalize:t}=e;return t(["Will execute when an error occurs in the block"])},times:{name:e=>{const{normalize:t}=e;return t(["Times"])},description:e=>{const{normalize:t}=e;return t(["The number of times to retry the action"])}},interval:{name:e=>{const{normalize:t}=e;return t(["Interval"])},description:e=>{const{normalize:t}=e;return t(["The time interval to wait between each try"])},second:e=>{const{normalize:t}=e;return t(["second"])}},toDo:{error:e=>{const{normalize:t}=e;return t(["Throw error"])},continue:e=>{const{normalize:t}=e;return t(["Continue flow"])},fallback:e=>{const{normalize:t}=e;return t(["Execute fallback"])},restart:e=>{const{normalize:t}=e;return t(["Restart flow"])}},insertData:{name:e=>{const{normalize:t}=e;return t(["Insert data"])}}},table:{checkbox:e=>{const{normalize:t}=e;return t(["Insert to table"])},select:e=>{const{normalize:t}=e;return t(["Select column"])},extraRow:{checkbox:e=>{const{normalize:t}=e;return t(["Add extra row"])},placeholder:e=>{const{normalize:t}=e;return t(["Value"])},title:e=>{const{normalize:t}=e;return t(["Value of the extra row"])}}},findElement:{placeholder:e=>{const{normalize:t}=e;return t(["Find element by"])},options:{cssSelector:e=>{const{normalize:t}=e;return t(["CSS Selector"])},xpath:e=>{const{normalize:t}=e;return t(["XPath"])}}},markElement:{title:e=>{const{normalize:t}=e;return t(["An element will not be selected if have been selected before"])},text:e=>{const{normalize:t}=e;return t(["Mark element"])}},multiple:{title:e=>{const{normalize:t}=e;return t(["Select multiple element"])},text:e=>{const{normalize:t}=e;return t(["Multiple"])}},waitSelector:{title:e=>{const{normalize:t}=e;return t(["Wait for selector"])},timeout:e=>{const{normalize:t}=e;return t(["Selector timeout (ms)"])}},downloads:{onConflict:{uniquify:e=>{const{normalize:t}=e;return t(["Uniquify"])},overwrite:e=>{const{normalize:t}=e;return t(["Overwrite"])},prompt:e=>{const{normalize:t}=e;return t(["Prompt"])}}}},"wait-connections":{name:e=>{const{normalize:t}=e;return t(["Wait connections"])},description:e=>{const{normalize:t}=e;return t(["Wait for all connections before continuing to the next block"])},specificFlow:e=>{const{normalize:t}=e;return t(["Only continue a specific flow"])},selectFlow:e=>{const{normalize:t}=e;return t(["Select flow"])}},cookie:{name:e=>{const{normalize:t}=e;return t(["Cookie"])},description:e=>{const{normalize:t}=e;return t(["Get, set, or remove cookies"])},types:{get:e=>{const{normalize:t}=e;return t(["Get cookies"])},set:e=>{const{normalize:t}=e;return t(["Set cookie"])},remove:e=>{const{normalize:t}=e;return t(["Remove cookies"])},getAll:e=>{const{normalize:t}=e;return t(["Get all cookies"])}},useJson:e=>{const{normalize:t}=e;return t(["Use JSON format"])}},note:{name:e=>{const{normalize:t}=e;return t(["Note"])}},"slice-variable":{name:e=>{const{normalize:t}=e;return t(["Slice variable"])},description:e=>{const{normalize:t}=e;return t(["Extracts a section of a variable value"])},start:e=>{const{normalize:t}=e;return t(["Start index"])},end:e=>{const{normalize:t}=e;return t(["End index"])}},"workflow-state":{name:e=>{const{normalize:t}=e;return t(["Workflow state"])},description:e=>{const{normalize:t}=e;return t(["Manage workflows states"])},actions:{stop:e=>{const{normalize:t}=e;return t(["Stop workflows"])}}},"regex-variable":{name:e=>{const{normalize:t}=e;return t(["RegEx variable"])},description:e=>{const{normalize:t}=e;return t(["Matching a variable value against a regular expression"])}},"data-mapping":{source:e=>{const{normalize:t}=e;return t(["Source"])},destination:e=>{const{normalize:t}=e;return t(["Destination"])},name:e=>{const{normalize:t}=e;return t(["Data mapping"])},edit:e=>{const{normalize:t}=e;return t(["Edit data map"])},dataSource:e=>{const{normalize:t}=e;return t(["Data source"])},description:e=>{const{normalize:t}=e;return t(["Map data of a variable or table"])},addSource:e=>{const{normalize:t}=e;return t(["Add source"])},addDestination:e=>{const{normalize:t}=e;return t(["Add destination"])}},"sort-data":{name:e=>{const{normalize:t}=e;return t(["Sort data"])},description:e=>{const{normalize:t}=e;return t(["Sort the items of data"])},property:e=>{const{normalize:t}=e;return t(["Sort by the item's property"])},addProperty:e=>{const{normalize:t}=e;return t(["Add property"])}},"increase-variable":{name:e=>{const{normalize:t}=e;return t(["Increase variable"])},description:e=>{const{normalize:t}=e;return t(["Increase the value of a variable by a specific amount"])},increase:e=>{const{normalize:t}=e;return t(["Increase by"])}},notification:{name:e=>{const{normalize:t}=e;return t(["notification"])},description:e=>{const{normalize:t}=e;return t(["Display a notification"])},title:e=>{const{normalize:t}=e;return t(["Title"])},message:e=>{const{normalize:t}=e;return t(["Message"])},imageUrl:e=>{const{normalize:t}=e;return t(["Image URL (optional)"])},iconUrl:e=>{const{normalize:t}=e;return t(["Icon URL (optional)"])}},"delete-data":{name:e=>{const{normalize:t}=e;return t(["Delete data"])},description:e=>{const{normalize:t}=e;return t(["Delete table or variable data"])},from:e=>{const{normalize:t}=e;return t(["Data from"])},allColumns:e=>{const{normalize:t}=e;return t(["[All columns]"])}},"log-data":{name:e=>{const{normalize:t}=e;return t(["Get log data"])},description:e=>{const{normalize:t}=e;return t(["Get the latest log data of a workflow"])},data:e=>{const{normalize:t}=e;return t(["Log data"])}},"tab-url":{name:e=>{const{normalize:t}=e;return t(["Get tab URL"])},description:e=>{const{normalize:t}=e;return t(["Get the tab URL"])},select:e=>{const{normalize:t}=e;return t(["Select tab"])},types:{"active-tab":e=>{const{normalize:t}=e;return t(["Active tab"])},all:e=>{const{normalize:t}=e;return t(["All tabs"])}},query:{title:e=>{const{normalize:t}=e;return t(["Query"])},matchPatterns:e=>{const{normalize:t,linked:n,type:r}=e;return t([n("workflow.blocks.switch-tab.matchPattern",void 0,r)," (optional)"])},tabTitle:e=>{const{normalize:t}=e;return t(["Tab title (optional)"])}}},"reload-tab":{name:e=>{const{normalize:t}=e;return t(["Reload tab"])},description:e=>{const{normalize:t}=e;return t(["Reload the active tab"])}},"press-key":{name:e=>{const{normalize:t}=e;return t(["Press key"])},description:e=>{const{normalize:t}=e;return t(["Press a key or a combination"])},target:e=>{const{normalize:t}=e;return t(["Target element (optional)"])},key:e=>{const{normalize:t}=e;return t(["Key"])},detect:e=>{const{normalize:t}=e;return t(["Detect key"])},actions:{"press-key":e=>{const{normalize:t}=e;return t(["Press a key"])},"multiple-keys":e=>{const{normalize:t}=e;return t(["Press multiple keys"])}}},"save-assets":{name:e=>{const{normalize:t}=e;return t(["Save assets"])},description:e=>{const{normalize:t}=e;return t(["Save assets (image, video, audio, or file) from an element or URL"])},filename:e=>{const{normalize:t}=e;return t(["Filename (optional)"])},saveDownloadIds:e=>{const{normalize:t}=e;return t(["Save items' download IDs"])},contentTypes:{title:e=>{const{normalize:t}=e;return t(["Type"])},element:e=>{const{normalize:t}=e;return t(["Media element (image, audio, or video)"])},url:e=>{const{normalize:t}=e;return t(["URL"])}}},"handle-dialog":{name:e=>{const{normalize:t}=e;return t(["Handle dialog"])},description:e=>{const{normalize:t}=e;return t(["Accepts or dismisses a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload)"])},accept:e=>{const{normalize:t}=e;return t(["Accept dialog"])},promptText:{label:e=>{const{normalize:t}=e;return t(["Prompt text (optional)"])},description:e=>{const{normalize:t}=e;return t(["The text to enter into the prompt dialog before accepting"])}}},"handle-download":{name:e=>{const{normalize:t}=e;return t(["Handle download"])},description:e=>{const{normalize:t}=e;return t(["Handle downloaded file"])},timeout:e=>{const{normalize:t}=e;return t(["Timeout (milliseconds)"])},noPermission:e=>{const{normalize:t}=e;return t(["Don't have permission to access the downloads"])},onConflict:e=>{const{normalize:t}=e;return t(["On conflict"])},waitFile:e=>{const{normalize:t}=e;return t(["Wait for the file to be downloaded"])},downloadId:e=>{const{normalize:t}=e;return t(["File download ID (optional)"])},filePath:e=>{const{normalize:t}=e;return t(["File path"])}},"insert-data":{name:e=>{const{normalize:t}=e;return t(["Insert data"])},description:e=>{const{normalize:t}=e;return t(["Insert data into table or variable"])}},clipboard:{name:e=>{const{normalize:t}=e;return t(["Clipboard"])},description:e=>{const{normalize:t}=e;return t(["Get the copied text from the clipboard"])},data:e=>{const{normalize:t}=e;return t(["Clipboard data"])},noPermission:e=>{const{normalize:t}=e;return t(["Don't have permission to access the clipboard"])},grantPermission:e=>{const{normalize:t}=e;return t(["Grant permission"])},copySelection:e=>{const{normalize:t}=e;return t(["Copy the selected text on page"])},types:{get:e=>{const{normalize:t}=e;return t(["Get clipboard data"])},insert:e=>{const{normalize:t}=e;return t(["Insert text to clipboard"])}}},"hover-element":{name:e=>{const{normalize:t}=e;return t(["Hover element"])},description:e=>{const{normalize:t}=e;return t(["Hover over an element"])}},"create-element":{name:e=>{const{normalize:t}=e;return t(["Create element"])},description:e=>{const{normalize:t}=e;return t(["Create an element and insert it into the page"])},edit:e=>{const{normalize:t}=e;return t(["Edit element"])},wrap:e=>{const{normalize:t}=e;return t(["Wrap the element inside"])},insertEl:{title:e=>{const{normalize:t}=e;return t(["Insert element"])},items:{before:e=>{const{normalize:t}=e;return t(["As first child"])},after:e=>{const{normalize:t}=e;return t(["As last child"])},"next-sibling":e=>{const{normalize:t}=e;return t(["As next sibling"])},"prev-sibling":e=>{const{normalize:t}=e;return t(["As previous sibling"])},replace:e=>{const{normalize:t}=e;return t(["Replace target element"])}}}},"upload-file":{name:e=>{const{normalize:t}=e;return t(["Upload file"])},description:e=>{const{normalize:t}=e;return t(['Upload file into <input type="file"> element'])},filePath:e=>{const{normalize:t}=e;return t(["URL or File path"])},addFile:e=>{const{normalize:t}=e;return t(["Add file"])},onlyURL:e=>{const{normalize:t}=e;return t(["Only uploading files from a URL is supported in the Firefox browser"])},requirement:e=>{const{normalize:t}=e;return t(["Read the requirements before using this block"])},noFileAccess:e=>{const{normalize:t}=e;return t(["Automa doesn't have access to files"])}},"browser-event":{name:e=>{const{normalize:t}=e;return t(["Browser event"])},description:e=>{const{normalize:t}=e;return t(["Executes the next block when the specified event is triggered"])},events:e=>{const{normalize:t}=e;return t(["Events"])},timeout:e=>{const{normalize:t}=e;return t(["Timeout (milliseconds)"])},activeTabLoaded:e=>{const{normalize:t}=e;return t(["Active tab"])},setAsActiveTab:e=>{const{normalize:t}=e;return t(["Set as active tab"])}},"blocks-group-2":{name:e=>{const{normalize:t,linked:n,type:r}=e;return t([n("workflow.blocks.blocks-group.name",void 0,r)," 2"])},description:e=>{const{normalize:t,linked:n,type:r}=e;return t([n("workflow.blocks.blocks-group.description",void 0,r)])}},"blocks-group":{name:e=>{const{normalize:t}=e;return t(["Blocks group"])},groupName:e=>{const{normalize:t}=e;return t(["Group name"])},description:e=>{const{normalize:t}=e;return t(["Grouping blocks"])},dropText:e=>{const{normalize:t}=e;return t(["Drag & drop a block here"])},cantAdd:e=>{const{normalize:t,interpolate:n,named:r}=e;return t(["Can't add \"",n(r("blockName")),'" block to the group'])}},trigger:{name:e=>{const{normalize:t}=e;return t(["Trigger"])},description:e=>{const{normalize:t}=e;return t(["Block where the workflow will start executing"])},addTime:e=>{const{normalize:t}=e;return t(["Add time"])},selectDay:e=>{const{normalize:t}=e;return t(["Select day"])},timeExist:e=>{const{normalize:t,interpolate:n,named:r}=e;return t(["You already added a trigger at ",n(r("time"))," on ",n(r("day"))])},fixedDelay:e=>{const{normalize:t}=e;return t(["Fixed delay"])},contextMenus:{noPermission:e=>{const{normalize:t}=e;return t(['This trigger requires "contextMenus" permission to be working'])},grantPermission:e=>{const{normalize:t}=e;return t(["Grant permission"])},appearIn:e=>{const{normalize:t}=e;return t(["Will appear in"])},contextName:e=>{const{normalize:t}=e;return t(["Workflow name in the context menu"])}},days:[e=>{const{normalize:t}=e;return t(["Sunday"])},e=>{const{normalize:t}=e;return t(["Monday"])},e=>{const{normalize:t}=e;return t(["Tuesday"])},e=>{const{normalize:t}=e;return t(["Wednesday"])},e=>{const{normalize:t}=e;return t(["Thursday"])},e=>{const{normalize:t}=e;return t(["Friday"])},e=>{const{normalize:t}=e;return t(["Saturday"])}],useRegex:e=>{const{normalize:t}=e;return t(["Use regex"])},shortcut:{tooltip:e=>{const{normalize:t}=e;return t(["Record shortcut"])},stopRecord:e=>{const{normalize:t}=e;return t(["Stop recording"])},checkboxTitle:e=>{const{normalize:t}=e;return t(["Execute shortcut even when you're in an input element"])},checkbox:e=>{const{normalize:t}=e;return t(["Active while in input"])},note:e=>{const{normalize:t}=e;return t(["Note: keyboard shortcut only works when you're on a webpage"])}},forms:{triggerWorkflow:e=>{const{normalize:t}=e;return t(["Trigger workflow"])},interval:e=>{const{normalize:t}=e;return t(["Interval (minutes)"])},delay:e=>{const{normalize:t}=e;return t(["Delay (minutes)"])},date:e=>{const{normalize:t}=e;return t(["Date"])},time:e=>{const{normalize:t}=e;return t(["Time"])},url:e=>{const{normalize:t}=e;return t(["URL or Regex"])},shortcut:e=>{const{normalize:t}=e;return t(["Shortcut"])},"cron-expression":e=>{const{normalize:t}=e;return t(["Cron expression"])}},"element-change":{target:e=>{const{normalize:t}=e;return t(["Target element to observe"])},optionsInfo:e=>{const{normalize:t}=e;return t(["Which element mutation will trigger the workflow"])},targetWebsite:e=>{const{normalize:t}=e;return t(["The Match Pattern of the website where the target element is (click to see more Match Pattern examples)"])},baseEl:{title:e=>{const{normalize:t}=e;return t(["Base element (optional)"])},description:e=>{const{normalize:t}=e;return t(["Automa will restart observing the target element when this element changes"])}},subtree:{title:e=>{const{normalize:t}=e;return t(["Include subtree"])},description:e=>{const{normalize:t}=e;return t(["Extend monitoring to the entire subtree of the target element"])}},childList:{title:e=>{const{normalize:t}=e;return t(["Child list"])},description:e=>{const{normalize:t}=e;return t(["Monitor the addition of new child elements or the removal of existing ones"])}},attributes:{title:e=>{const{normalize:t}=e;return t(["Attributes"])},description:e=>{const{normalize:t}=e;return t(["Watch for changes to the attribute values of the target element"])}},attributeFilter:{title:e=>{const{normalize:t}=e;return t(["Attribute filter"])},separate:e=>{const{normalize:t}=e;return t(["Use commas (,) to separate attribute names"])},description:e=>{const{normalize:t}=e;return t(["Only monitor specific attributes (leave blank to monitor all)"])}},characterData:{title:e=>{const{normalize:t}=e;return t(["Character data"])},description:e=>{const{normalize:t}=e;return t(["Monitor changes to the character data/text within the target element"])}}},items:{manual:e=>{const{normalize:t}=e;return t(["Manually"])},interval:e=>{const{normalize:t}=e;return t(["Interval"])},"cron-job":e=>{const{normalize:t}=e;return t(["Cron job"])},date:e=>{const{normalize:t}=e;return t(["On a specific date"])},"context-menu":e=>{const{normalize:t}=e;return t(["Context menu"])},"element-change":e=>{const{normalize:t}=e;return t(["On element change"])},"specific-day":e=>{const{normalize:t}=e;return t(["On a specific day"])},"visit-web":e=>{const{normalize:t}=e;return t(["When visiting a website"])},"on-startup":e=>{const{normalize:t}=e;return t(["On browser startup"])},"keyboard-shortcut":e=>{const{normalize:t}=e;return t(["Keyboard shortcut"])}}},"execute-workflow":{name:e=>{const{normalize:t}=e;return t(["Execute workflow"])},overwriteNote:e=>{const{normalize:t}=e;return t(["This will overwrite the global data of the selected workflow"])},select:e=>{const{normalize:t}=e;return t(["Select workflow"])},executeId:e=>{const{normalize:t}=e;return t(["Execute Id (optional)"])},description:e=>{const{normalize:t}=e;return t([])},insertAllVars:e=>{const{normalize:t}=e;return t(["Use all current workflow variables"])},insertVars:e=>{const{normalize:t}=e;return t(["Insert current workflow variables"])},useCommas:e=>{const{normalize:t}=e;return t(["Use commas to separate the variable name"])}},"google-sheets-drive":{name:e=>{const{normalize:t,linked:n,type:r}=e;return t([n("workflow.blocks.google-sheets.name",void 0,r)," (GDrive)"])},description:e=>{const{normalize:t,linked:n,type:r}=e;return t([n("workflow.blocks.google-sheets.description",void 0,r)])},connected:e=>{const{normalize:t}=e;return t(["Connected sheets"])},select:e=>{const{normalize:t}=e;return t(["Select sheet"])},connect:e=>{const{normalize:t}=e;return t(["Connect sheet"])}},"google-drive":{name:e=>{const{normalize:t}=e;return t(["Google Drive"])},description:e=>{const{normalize:t}=e;return t(["Upload files to Google Drive"])},actions:{upload:e=>{const{normalize:t}=e;return t(["Upload files"])}}},"google-sheets":{name:e=>{const{normalize:t}=e;return t(["Google Sheets"])},description:e=>{const{normalize:t}=e;return t(["Read or update Google Sheets data"])},previewData:e=>{const{normalize:t}=e;return t(["Preview data"])},firstRow:e=>{const{normalize:t}=e;return t(["Use the first row as keys"])},keysAsFirstRow:e=>{const{normalize:t}=e;return t(["Use keys as the first row"])},insertData:e=>{const{normalize:t}=e;return t(["Insert data"])},valueInputOption:e=>{const{normalize:t}=e;return t(["Value input option"])},insertDataOption:e=>{const{normalize:t}=e;return t(["Insert data option"])},rangeToSearch:e=>{const{normalize:t}=e;return t(["Range to start the search"])},dataFrom:{label:e=>{const{normalize:t}=e;return t(["Data from"])},options:{"data-columns":e=>{const{normalize:t}=e;return t(["Table"])},custom:e=>{const{normalize:t}=e;return t(["Custom"])}}},refKey:{label:e=>{const{normalize:t}=e;return t(["Reference key (optional)"])},placeholder:e=>{const{normalize:t}=e;return t(["Key name"])}},spreadsheetId:{label:e=>{const{normalize:t}=e;return t(["Spreadsheet Id"])},link:e=>{const{normalize:t}=e;return t(["See how to get spreadsheet Id"])}},range:{label:e=>{const{normalize:t}=e;return t(["Range"])},link:e=>{const{normalize:t}=e;return t(["Click to see more examples"])}},select:{get:e=>{const{normalize:t}=e;return t(["Get spreadsheet cell values"])},getRange:e=>{const{normalize:t}=e;return t(["Get spreadsheet range"])},update:e=>{const{normalize:t}=e;return t(["Update spreadsheet cell values"])},append:e=>{const{normalize:t}=e;return t(["Append spreadsheet cell values"])},clear:e=>{const{normalize:t}=e;return t(["Clear spreadsheet cell values"])},create:e=>{const{normalize:t}=e;return t(["Create a spreadsheet"])},"add-sheet":e=>{const{normalize:t}=e;return t(["Add sheet"])}}},"active-tab":{name:e=>{const{normalize:t}=e;return t(["Active tab"])},description:e=>{const{normalize:t}=e;return t(["Set the tab you're in as the active tab"])}},proxy:{name:e=>{const{normalize:t}=e;return t(["Proxy"])},description:e=>{const{normalize:t}=e;return t(["Set the proxy of the browser"])},clear:e=>{const{normalize:t}=e;return t(["Clear all proxies"])},bypass:{label:e=>{const{normalize:t}=e;return t(["Bypass list"])},note:e=>{const{normalize:t}=e;return t(["Use commas (,) to separate URL"])}}},"new-window":{name:e=>{const{normalize:t}=e;return t(["New window"])},description:e=>{const{normalize:t}=e;return t(["Create a new window"])},top:e=>{const{normalize:t}=e;return t(["Top"])},left:e=>{const{normalize:t}=e;return t(["Left"])},height:e=>{const{normalize:t}=e;return t(["Height"])},width:e=>{const{normalize:t}=e;return t(["Width"])},note:e=>{const{normalize:t}=e;return t(["Note: use 0 to disable"])},position:e=>{const{normalize:t}=e;return t(["Window position"])},size:e=>{const{normalize:t}=e;return t(["Window size"])},windowState:{placeholder:e=>{const{normalize:t}=e;return t(["Window state"])},options:{normal:e=>{const{normalize:t}=e;return t(["Normal"])},minimized:e=>{const{normalize:t}=e;return t(["Minimized"])},maximized:e=>{const{normalize:t}=e;return t(["Maximized"])},fullscreen:e=>{const{normalize:t}=e;return t(["Fullscreen"])}}},incognito:{text:e=>{const{normalize:t}=e;return t(["Set as an incognito window"])},note:e=>{const{normalize:t}=e;return t(["You must enable 'Allow in incognito' for this extension first"])}}},"go-back":{name:e=>{const{normalize:t}=e;return t(["Go back"])},description:e=>{const{normalize:t}=e;return t(["Go back to the previous page"])}},"forward-page":{name:e=>{const{normalize:t}=e;return t(["Go forward"])},description:e=>{const{normalize:t}=e;return t(["Go forward to the next page"])}},"close-tab":{name:e=>{const{normalize:t}=e;return t(["Close tab/window"])},description:e=>{const{normalize:t}=e;return t([])},url:e=>{const{normalize:t}=e;return t(["Match Patterns"])},activeTab:e=>{const{normalize:t}=e;return t(["Close active tab"])},allWindows:e=>{const{normalize:t}=e;return t(["Close all windows"])}},"event-click":{name:e=>{const{normalize:t}=e;return t(["Click element"])},description:e=>{const{normalize:t}=e;return t([])}},delay:{name:e=>{const{normalize:t}=e;return t(["Delay"])},description:e=>{const{normalize:t}=e;return t(["Add a delay before executing the next block"])},input:{title:e=>{const{normalize:t}=e;return t(["Delay in milliseconds"])},placeholder:e=>{const{normalize:t}=e;return t(["(milliseconds)"])}}},"parameter-prompt":{name:e=>{const{normalize:t}=e;return t(["Parameter Prompt"])}},"get-text":{name:e=>{const{normalize:t}=e;return t(["Get text"])},description:e=>{const{normalize:t}=e;return t(["Get text from an element"])},checkbox:e=>{const{normalize:t}=e;return t(["Insert to table"])},includeTags:e=>{const{normalize:t}=e;return t(["Include HTML tags"])},prefixText:{placeholder:e=>{const{normalize:t}=e;return t(["Text prefix"])},title:e=>{const{normalize:t}=e;return t(["Add prefix to the text"])}},suffixText:{placeholder:e=>{const{normalize:t}=e;return t(["Text suffix"])},title:e=>{const{normalize:t}=e;return t(["Add suffix to the text"])}}},"export-data":{name:e=>{const{normalize:t}=e;return t(["Export data"])},description:e=>{const{normalize:t}=e;return t(["Export workflow data"])},exportAs:e=>{const{normalize:t}=e;return t(["Export as"])},refKey:e=>{const{normalize:t}=e;return t(["Reference key"])},bomHeader:e=>{const{normalize:t}=e;return t(["Add UTF-8 BOM"])},dataToExport:{placeholder:e=>{const{normalize:t}=e;return t(["Data to export"])},options:{"data-columns":e=>{const{normalize:t}=e;return t(["Table"])},"google-sheets":e=>{const{normalize:t}=e;return t(["Google Sheets"])},variable:e=>{const{normalize:t}=e;return t(["Variable"])}}}},"element-scroll":{name:e=>{const{normalize:t}=e;return t(["Scroll element"])},description:e=>{const{normalize:t}=e;return t([])},scrollY:e=>{const{normalize:t}=e;return t(["Scroll vertical"])},scrollX:e=>{const{normalize:t}=e;return t(["Scroll horizontal"])},intoView:e=>{const{normalize:t}=e;return t(["Scroll into view"])},smooth:e=>{const{normalize:t}=e;return t(["Smooth scroll"])},incScrollX:e=>{const{normalize:t}=e;return t(["Increment horizontal scroll"])},incScrollY:e=>{const{normalize:t}=e;return t(["Increment vertical scroll"])}},"switch-tab":{name:e=>{const{normalize:t}=e;return t(["Switch tab"])},description:e=>{const{normalize:t}=e;return t(["Switch between tab"])},matchPattern:e=>{const{normalize:t}=e;return t(["Match Patterns"])},url:e=>{const{normalize:t}=e;return t(["New tab URL"])},createIfNoMatch:e=>{const{normalize:t}=e;return t(["Create if there's no match"])}},"new-tab":{name:e=>{const{normalize:t}=e;return t(["New tab"])},description:e=>{const{normalize:t}=e;return t([])},url:e=>{const{normalize:t}=e;return t(["New tab URL"])},customUserAgent:e=>{const{normalize:t}=e;return t(["Use custom User-Agent"])},activeTab:e=>{const{normalize:t}=e;return t(["Set as active tab"])},tabToGroup:e=>{const{normalize:t}=e;return t(["Add tab to a group"])},waitTabLoaded:e=>{const{normalize:t}=e;return t(["Wait until the tab is loaded"])},updatePrevTab:{title:e=>{const{normalize:t}=e;return t(["Use the previously opened new tab instead of creating a new one"])},text:e=>{const{normalize:t}=e;return t(["Update previously opened tab"])}}},link:{name:e=>{const{normalize:t}=e;return t(["Link"])},description:e=>{const{normalize:t}=e;return t(["Open link element"])},openInNewTab:e=>{const{normalize:t}=e;return t(["Open in new tab"])}},"attribute-value":{name:e=>{const{normalize:t}=e;return t(["Attribute value"])},description:e=>{const{normalize:t}=e;return t(["Get the value of an element attribute"])},forms:{name:e=>{const{normalize:t}=e;return t(["Attribute name"])},checkbox:e=>{const{normalize:t}=e;return t(["Insert to table"])},column:e=>{const{normalize:t}=e;return t(["Select column"])},extraRow:{checkbox:e=>{const{normalize:t}=e;return t(["Add extra row"])},placeholder:e=>{const{normalize:t}=e;return t(["Value"])},title:e=>{const{normalize:t}=e;return t(["Value of the extra row"])}}}},forms:{name:e=>{const{normalize:t}=e;return t(["Forms"])},description:e=>{const{normalize:t}=e;return t([])},selected:e=>{const{normalize:t}=e;return t(["Selected"])},type:e=>{const{normalize:t}=e;return t(["Form type"])},getValue:e=>{const{normalize:t}=e;return t(["Get form value"])},"text-field":{name:e=>{const{normalize:t}=e;return t(["Text field"])},value:e=>{const{normalize:t}=e;return t(["Value"])},clearValue:e=>{const{normalize:t}=e;return t(["Clear form value"])},delay:{placeholder:e=>{const{normalize:t}=e;return t(["Delay"])},label:e=>{const{normalize:t}=e;return t(["Typing delay (millisecond)(0 to disable)"])}}},select:{name:e=>{const{normalize:t}=e;return t(["Select"])}},radio:{name:e=>{const{normalize:t}=e;return t(["Radio"])}},checkbox:{name:e=>{const{normalize:t}=e;return t(["Checkbox"])}}},"repeat-task":{name:e=>{const{normalize:t}=e;return t(["Repeat task"])},description:e=>{const{normalize:t}=e;return t([])},times:e=>{const{normalize:t}=e;return t(["times"])},repeatFrom:e=>{const{normalize:t}=e;return t(["Repeat from"])}},"javascript-code":{name:e=>{const{normalize:t}=e;return t(["JavaScript code"])},description:e=>{const{normalize:t}=e;return t(["Execute your JavaScript code in the web page"])},availabeFuncs:e=>{const{normalize:t}=e;return t(["Available functions:"])},removeAfterExec:e=>{const{normalize:t}=e;return t(["Remove after block execution"])},everyNewTab:e=>{const{normalize:t}=e;return t(["Execute in every new tab"])},context:{name:e=>{const{normalize:t}=e;return t(["Execution context"])},items:{website:e=>{const{normalize:t}=e;return t(["Active tab"])},background:e=>{const{normalize:t}=e;return t(["Background"])}}},modal:{tabs:{code:e=>{const{normalize:t}=e;return t(["JavaScript code"])},preloadScript:e=>{const{normalize:t}=e;return t(["Preload script"])}}},timeout:{placeholder:e=>{const{normalize:t}=e;return t(["Timeout (milliseconds)"])},title:e=>{const{normalize:t}=e;return t(["JavaScript code execution timeout"])}}},"trigger-event":{name:e=>{const{normalize:t}=e;return t(["Trigger event"])},description:e=>{const{normalize:t}=e;return t([])},selectEvent:e=>{const{normalize:t}=e;return t(["Select event"])}},conditions:{name:e=>{const{normalize:t}=e;return t(["Conditions"])},add:e=>{const{normalize:t}=e;return t(["Add path"])},retryConditions:e=>{const{normalize:t}=e;return t(["Retry if no conditions are met"])},description:e=>{const{normalize:t}=e;return t(["Conditional block"])},refresh:e=>{const{normalize:t}=e;return t(["Refresh condition connections"])},fallbackTitle:e=>{const{normalize:t}=e;return t(["Executes when all comparisons don't meet the requirement"])},equals:e=>{const{normalize:t}=e;return t(["Equals"])},gt:e=>{const{normalize:t}=e;return t(["Greater than"])},gte:e=>{const{normalize:t}=e;return t(["Greater than or equal"])},lt:e=>{const{normalize:t}=e;return t(["Less than"])},lte:e=>{const{normalize:t}=e;return t(["Less than or equal"])},ne:e=>{const{normalize:t}=e;return t(["Not equals"])},contains:e=>{const{normalize:t}=e;return t(["Contains"])}},"element-exists":{name:e=>{const{normalize:t}=e;return t(["Element exists"])},description:e=>{const{normalize:t}=e;return t(["Check if an element exists"])},selector:e=>{const{normalize:t}=e;return t(["Element selector"])},fallbackTitle:e=>{const{normalize:t}=e;return t(["Executes when the element doesn't exist"])},throwError:e=>{const{normalize:t}=e;return t(["Throw an error if doesn't exist"])},tryFor:{title:e=>{const{normalize:t}=e;return t(["How many times to try to check if the element exists"])},label:e=>{const{normalize:t}=e;return t(["Try for"])}},timeout:{label:e=>{const{normalize:t}=e;return t(["Timeout (milliseconds)"])},title:e=>{const{normalize:t}=e;return t(["Timeout for each try"])}}},webhook:{name:e=>{const{normalize:t}=e;return t(["HTTP request"])},description:e=>{const{normalize:t}=e;return t(["Make an HTTP Request"])},contentType:e=>{const{normalize:t}=e;return t(["Content type"])},method:e=>{const{normalize:t}=e;return t(["Request method"])},url:e=>{const{normalize:t}=e;return t(["Request URL"])},fallback:e=>{const{normalize:t}=e;return t(["Executes when the HTTP request fails"])},buttons:{header:e=>{const{normalize:t}=e;return t(["Add header"])}},timeout:{placeholder:e=>{const{normalize:t}=e;return t(["Timeout"])},title:e=>{const{normalize:t}=e;return t(["HTTP request execution timeout (ms)"])}},tabs:{headers:e=>{const{normalize:t}=e;return t(["Headers"])},body:e=>{const{normalize:t}=e;return t(["Body"])},response:e=>{const{normalize:t}=e;return t(["Response"])}}},"while-loop":{name:e=>{const{normalize:t}=e;return t(["While loop"])},description:e=>{const{normalize:t}=e;return t(["Executes blocks while the condition is met"])},editCondition:e=>{const{normalize:t}=e;return t(["Edit condition"])},fallback:e=>{const{normalize:t}=e;return t(["Executes when the condition is false"])}},"loop-elements":{name:e=>{const{normalize:t}=e;return t(["Loop elements"])},description:e=>{const{normalize:t}=e;return t(["Iterate through elements"])},loadMore:e=>{const{normalize:t}=e;return t(["Load more elements"])},scrollToBottom:e=>{const{normalize:t}=e;return t(["Scroll to bottom"])},scrollToTop:e=>{const{normalize:t}=e;return t(["Scroll to top"])},actions:{none:e=>{const{normalize:t}=e;return t(["None"])},"click-element":e=>{const{normalize:t}=e;return t(["Click an element"])},scroll:e=>{const{normalize:t}=e;return t(["Scroll down"])},"click-link":e=>{const{normalize:t}=e;return t(["Click a link"])},"scroll-up":e=>{const{normalize:t}=e;return t(["Scroll up"])}}},"loop-data":{name:e=>{const{normalize:t}=e;return t(["Loop data"])},description:e=>{const{normalize:t}=e;return t(["Iterate through a table or your custom data"])},loopId:e=>{const{normalize:t}=e;return t(["Loop ID"])},refKey:e=>{const{normalize:t}=e;return t(["Reference key"])},startIndex:e=>{const{normalize:t}=e;return t(["Start from index"])},resumeLastWorkflow:e=>{const{normalize:t}=e;return t(["Resume last workflow"])},reverse:e=>{const{normalize:t}=e;return t(["Reverse loop order"])},modal:{fileTooLarge:e=>{const{normalize:t}=e;return t(["File too large to edit"])},maxFile:e=>{const{normalize:t}=e;return t(["Max file size is 1MB"])},options:{firstRow:e=>{const{normalize:t}=e;return t(["Use the first row as keys"])}}},buttons:{clear:e=>{const{normalize:t}=e;return t(["Clear data"])},insert:e=>{const{normalize:t}=e;return t(["Insert data"])},import:e=>{const{normalize:t}=e;return t(["Import file"])}},maxLoop:{title:e=>{const{normalize:t}=e;return t(["Max number of data to loop"])},label:e=>{const{normalize:t}=e;return t(["Max data to loop (0 to disable)"])}},loopThrough:{placeholder:e=>{const{normalize:t}=e;return t(["Loop through"])},fromNumber:e=>{const{normalize:t}=e;return t(["From number"])},toNumber:e=>{const{normalize:t}=e;return t(["To number"])},options:{numbers:e=>{const{normalize:t}=e;return t(["Numbers"])},variable:e=>{const{normalize:t}=e;return t(["Variable"])},"data-columns":e=>{const{normalize:t}=e;return t(["Table"])},table:e=>{const{normalize:t}=e;return t(["Table"])},"custom-data":e=>{const{normalize:t}=e;return t(["Custom data"])},"google-sheets":e=>{const{normalize:t}=e;return t(["Google Sheets"])},elements:e=>{const{normalize:t}=e;return t(["Elements"])}}}},"loop-breakpoint":{name:e=>{const{normalize:t}=e;return t(["Loop breakpoint"])},description:e=>{const{normalize:t}=e;return t(["To indicate where the Loop Data block must stop"])}},"take-screenshot":{name:e=>{const{normalize:t}=e;return t(["Take screenshot"])},fullPage:e=>{const{normalize:t}=e;return t(["Take full page screenshot"])},description:e=>{const{normalize:t}=e;return t(["Take a screenshot of current active tab"])},imageQuality:e=>{const{normalize:t}=e;return t(["Image quality"])},saveToColumn:e=>{const{normalize:t}=e;return t(["Insert screenshot to table"])},saveToComputer:e=>{const{normalize:t}=e;return t(["Save screenshot to computer"])},types:{title:e=>{const{normalize:t}=e;return t(["Take a screenshot of"])},page:e=>{const{normalize:t}=e;return t(["A page"])},fullpage:e=>{const{normalize:t}=e;return t(["A full page"])},element:e=>{const{normalize:t}=e;return t(["An element"])}}},"switch-to":{name:e=>{const{normalize:t}=e;return t(["Switch frame"])},description:e=>{const{normalize:t}=e;return t(["Switch between the main window and an iframe"])},iframeSelector:e=>{const{normalize:t}=e;return t(["Element selector"])},windowTypes:{main:e=>{const{normalize:t}=e;return t(["Main window"])},iframe:e=>{const{normalize:t}=e;return t(["Iframe"])}}}}}}}}]);