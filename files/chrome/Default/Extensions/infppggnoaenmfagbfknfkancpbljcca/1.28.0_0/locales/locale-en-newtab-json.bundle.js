"use strict";(self.webpackChunkautoma=self.webpackChunkautoma||[]).push([[835],{59609:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={home:{viewAll:e=>{const{normalize:t}=e;return t(["View all"])},communities:e=>{const{normalize:t}=e;return t(["Communities"])}},welcome:{title:e=>{const{normalize:t}=e;return t(["Welcome to Automa! 🎉"])},text:e=>{const{normalize:t}=e;return t(["Get started by reading the documentation or browsing workflows in the Automa Marketplace."])},marketplace:e=>{const{normalize:t}=e;return t(["Marketplace"])}},packages:{name:e=>{const{normalize:t,plural:r}=e;return r([t(["Package"]),t(["Packages"])])},add:e=>{const{normalize:t}=e;return t(["Add package"])},icon:e=>{const{normalize:t}=e;return t(["Package icon"])},open:e=>{const{normalize:t}=e;return t(["Open packages"])},new:e=>{const{normalize:t}=e;return t(["New package"])},import:e=>{const{normalize:t}=e;return t(["Import package"])},set:e=>{const{normalize:t}=e;return t(["Set as a package"])},settings:{asBlock:e=>{const{normalize:t}=e;return t(["Set package as block"])}},categories:{my:e=>{const{normalize:t}=e;return t(["My Packages"])},installed:e=>{const{normalize:t}=e;return t(["Installed Packages"])}}},scheduledWorkflow:{title:e=>{const{normalize:t}=e;return t(["Scheduled workflows"])},nextRun:e=>{const{normalize:t}=e;return t(["Next run"])},active:e=>{const{normalize:t}=e;return t(["Active"])},refresh:e=>{const{normalize:t}=e;return t(["Refresh"])},schedule:{title:e=>{const{normalize:t}=e;return t(["Schedule"])},types:{everyDay:e=>{const{normalize:t}=e;return t(["Every day"])},general:e=>{const{normalize:t,interpolate:r,named:n}=e;return t(["Every ",r(n("time"))])},interval:e=>{const{normalize:t,interpolate:r,named:n}=e;return t(["Every ",r(n("time"))," minutes"])}}}},storage:{title:e=>{const{normalize:t}=e;return t(["Storage"])},table:{add:e=>{const{normalize:t}=e;return t(["Add table"])},createdAt:e=>{const{normalize:t}=e;return t(["Created at"])},modifiedAt:e=>{const{normalize:t}=e;return t(["Modified at"])},rowsCount:e=>{const{normalize:t}=e;return t(["Rows count"])},delete:e=>{const{normalize:t}=e;return t(["Delete table"])}}},credential:{title:e=>{const{normalize:t,plural:r}=e;return r([t(["Credential"]),t(["Credentials"])])},add:e=>{const{normalize:t}=e;return t(["Add credential"])},use:{title:e=>{const{normalize:t}=e;return t(["Used credentials"])},description:e=>{const{normalize:t}=e;return t(["This workflow uses these credentials"])}}},workflowPermissions:{title:e=>{const{normalize:t}=e;return t(["Workflow permissions"])},description:e=>{const{normalize:t}=e;return t(["This workflow requires these permissions to run properly"])},contextMenus:{title:e=>{const{normalize:t}=e;return t(["Context menu"])},description:e=>{const{normalize:t}=e;return t(["To execute the workflow via the context menu"])}},clipboardRead:{title:e=>{const{normalize:t}=e;return t(["Clipboard"])},description:e=>{const{normalize:t}=e;return t(["For accessing the clipboard data"])}},notifications:{title:e=>{const{normalize:t}=e;return t(["Notification"])},description:e=>{const{normalize:t}=e;return t(["For displaying a notification"])}},downloads:{title:e=>{const{normalize:t}=e;return t(["Download"])},description:e=>{const{normalize:t}=e;return t(["Saving the page assets and renaming the downloaded file"])}},cookies:{title:e=>{const{normalize:t}=e;return t(["Cookies"])},description:e=>{const{normalize:t}=e;return t(["Read, set, or remove cookies"])}}},updateMessage:{text1:e=>{const{normalize:t,interpolate:r,named:n}=e;return t(["Automa has been updated to v",r(n("version")),","])},text2:e=>{const{normalize:t}=e;return t(["see what's new."])}},workflows:{folder:{new:e=>{const{normalize:t}=e;return t(["New folder"])},name:e=>{const{normalize:t}=e;return t(["Folder name"])},delete:e=>{const{normalize:t}=e;return t(["Delete folder"])},rename:e=>{const{normalize:t}=e;return t(["Rename folder"])}}},auth:{title:e=>{const{normalize:t}=e;return t(["Auth"])},signIn:e=>{const{normalize:t}=e;return t(["Sign in"])},username:e=>{const{normalize:t}=e;return t(["You need to set your username first"])},clickHere:e=>{const{normalize:t}=e;return t(["Click here"])},text:e=>{const{normalize:t}=e;return t(["You need to be signed in before you can do that"])}},running:{start:e=>{const{normalize:t,interpolate:r,named:n}=e;return t(["Started on ",r(n("date"))])},message:e=>{const{normalize:t}=e;return t(["This only displays the last 5 logs"])}},settings:{theme:e=>{const{normalize:t}=e;return t(["Theme"])},shortcuts:{duplicate:e=>{const{normalize:t,interpolate:r,named:n}=e;return t(['Shortcut already use by "',r(n("name")),'"'])}},editor:{title:e=>{const{normalize:t}=e;return t(["Title"])},curvature:{title:e=>{const{normalize:t}=e;return t(["Line Curvature"])},line:e=>{const{normalize:t}=e;return t(["Line"])},reroute:e=>{const{normalize:t}=e;return t(["Reroute"])},rerouteFirstLast:e=>{const{normalize:t}=e;return t(["Reroute first & last point"])}},arrow:{title:e=>{const{normalize:t}=e;return t(["Line arrow"])},description:e=>{const{normalize:t}=e;return t(["Add an arrow at the end of the line"])}},snapGrid:{title:e=>{const{normalize:t}=e;return t(["Snap to the grid"])},description:e=>{const{normalize:t}=e;return t(["Snap to the grid when moving a block"])}}},deleteLog:{title:e=>{const{normalize:t}=e;return t(["Auto-delete workflow logs"])},after:e=>{const{normalize:t}=e;return t(["Delete after"])},deleteAfter:{never:e=>{const{normalize:t}=e;return t(["Never"])},days:e=>{const{normalize:t,interpolate:r,named:n}=e;return t([r(n("day"))," days"])}}},language:{label:e=>{const{normalize:t}=e;return t(["Language"])},helpTranslate:e=>{const{normalize:t}=e;return t(["Can't find your language? Help translate."])},reloadPage:e=>{const{normalize:t}=e;return t(["Reload the page for the change to take effect"])}},menu:{backup:e=>{const{normalize:t}=e;return t(["Backup Workflows"])},editor:e=>{const{normalize:t}=e;return t(["Editor"])},general:e=>{const{normalize:t}=e;return t(["General"])},shortcuts:e=>{const{normalize:t}=e;return t(["Shortcuts"])},about:e=>{const{normalize:t}=e;return t(["About"])}},backupWorkflows:{title:e=>{const{normalize:t}=e;return t(["Local Backup"])},invalidPassword:e=>{const{normalize:t}=e;return t(["Invalid password"])},workflowsAdded:e=>{const{normalize:t,interpolate:r,named:n}=e;return t([r(n("count"))," workflows have been added"])},name:e=>{const{normalize:t}=e;return t(["Backup workflows"])},needSignin:e=>{const{normalize:t}=e;return t(["You need to sign in first"])},backup:{button:e=>{const{normalize:t}=e;return t(["Backup"])},encrypt:e=>{const{normalize:t}=e;return t(["Encrypt with password"])}},restore:{title:e=>{const{normalize:t}=e;return t(["Restore workflows"])},button:e=>{const{normalize:t}=e;return t(["Restore"])},update:e=>{const{normalize:t}=e;return t(["Update if the workflow exists"])}},cloud:{buttons:{local:e=>{const{normalize:t}=e;return t(["Local"])},cloud:e=>{const{normalize:t}=e;return t(["Cloud"])}},location:e=>{const{normalize:t}=e;return t(["Location"])},delete:e=>{const{normalize:t}=e;return t(["Delete backup"])},title:e=>{const{normalize:t}=e;return t(["Cloud Backup"])},sync:e=>{const{normalize:t}=e;return t(["Sync"])},lastSync:e=>{const{normalize:t}=e;return t(["Last sync"])},lastBackup:e=>{const{normalize:t}=e;return t(["Last backup"])},select:e=>{const{normalize:t}=e;return t(["Select workflows"])},storedWorkflows:e=>{const{normalize:t}=e;return t(["Workflows that are stored in the cloud"])},selected:e=>{const{normalize:t}=e;return t(["Selected"])},selectText:e=>{const{normalize:t}=e;return t(["Select workflows that you want to backup"])},selectAll:e=>{const{normalize:t}=e;return t(["Select all"])},deselectAll:e=>{const{normalize:t}=e;return t(["Deselect all"])},needSelectWorkflow:e=>{const{normalize:t}=e;return t(["You need to select workflows that you want to backup"])}}}},workflow:{previewMode:{title:e=>{const{normalize:t}=e;return t(["Preview mode"])},description:e=>{const{normalize:t}=e;return t(["You're in preview mode, changes you've made won't be saved"])}},pinWorkflow:{pin:e=>{const{normalize:t}=e;return t(["Pin workflow"])},unpin:e=>{const{normalize:t}=e;return t(["Unpin workflow"])},pinned:e=>{const{normalize:t}=e;return t(["Pinned workflows"])}},parameters:{add:e=>{const{normalize:t}=e;return t(["Add parameter"])},preferInTab:e=>{const{normalize:t}=e;return t(["Prefer input parameters in the tab"])}},my:e=>{const{normalize:t}=e;return t(["My workflows"])},testing:{title:e=>{const{normalize:t}=e;return t(["Testing mode"])},nextBlock:e=>{const{normalize:t}=e;return t(["Next block"])},startRun:e=>{const{normalize:t}=e;return t(["Start run at"])},disabled:e=>{const{normalize:t}=e;return t(["Save changes first"])}},import:e=>{const{normalize:t}=e;return t(["Import workflow"])},new:e=>{const{normalize:t}=e;return t(["New workflow"])},delete:e=>{const{normalize:t}=e;return t(["Delete workflow"])},browse:e=>{const{normalize:t}=e;return t(["Browse workflows"])},name:e=>{const{normalize:t}=e;return t(["Workflow name"])},rename:e=>{const{normalize:t}=e;return t(["Rename workflow"])},backupCloud:e=>{const{normalize:t}=e;return t(["Backup workflow to cloud"])},add:e=>{const{normalize:t}=e;return t(["Add workflow"])},clickToEnable:e=>{const{normalize:t}=e;return t(["Click to enable"])},toggleSidebar:e=>{const{normalize:t}=e;return t(["Toggle sidebar"])},cantEdit:e=>{const{normalize:t}=e;return t(["Can't edit shared workflow"])},undo:e=>{const{normalize:t}=e;return t(["Undo"])},redo:e=>{const{normalize:t}=e;return t(["Redo"])},autoAlign:{title:e=>{const{normalize:t}=e;return t(["Auto-align"])}},blocksFolder:{title:e=>{const{normalize:t}=e;return t(["Blocks folder"])},add:e=>{const{normalize:t}=e;return t(["Add blocks to folder"])},save:e=>{const{normalize:t}=e;return t(["Save to folder"])}},searchBlocks:{title:e=>{const{normalize:t}=e;return t(["Search blocks in the editor"])}},conditionBuilder:{title:e=>{const{normalize:t}=e;return t(["Condition builder"])},add:e=>{const{normalize:t}=e;return t(["Add condition"])},and:e=>{const{normalize:t}=e;return t(["AND"])},or:e=>{const{normalize:t}=e;return t(["OR"])},topAwait:e=>{const{normalize:t}=e;return t(['Support top-level await and "automaRefData" function'])}},host:{title:e=>{const{normalize:t}=e;return t(["Host workflow"])},set:e=>{const{normalize:t}=e;return t(["Set as host workflow"])},id:e=>{const{normalize:t}=e;return t(["Host ID"])},add:e=>{const{normalize:t}=e;return t(["Add hosted workflow"])},sync:{title:e=>{const{normalize:t}=e;return t(["Sync"])},description:e=>{const{normalize:t}=e;return t(["Sync with host workflow"])}},messages:{hostExist:e=>{const{normalize:t}=e;return t(["You have already added this host"])},notFound:e=>{const{normalize:t,interpolate:r,named:n}=e;return t(["Can't find a hosted workflow with the ID \"",r(n("id")),'"'])}}},type:{local:e=>{const{normalize:t}=e;return t(["Local"])},shared:e=>{const{normalize:t}=e;return t(["Shared"])},host:e=>{const{normalize:t}=e;return t(["Host"])}},unpublish:{title:e=>{const{normalize:t}=e;return t(["Unpublish workflow"])},button:e=>{const{normalize:t}=e;return t(["Unpublish"])},body:e=>{const{normalize:t,interpolate:r,named:n}=e;return t(['Are you sure you want to unpublish the workflow "',r(n("name")),'"?'])}},share:{url:e=>{const{normalize:t}=e;return t(["Share URL"])},publish:e=>{const{normalize:t}=e;return t(["Publish"])},sharedAs:e=>{const{normalize:t,interpolate:r,named:n}=e;return t(['Shared as "',r(n("name")),'"'])},title:e=>{const{normalize:t}=e;return t(["Share workflow"])},download:e=>{const{normalize:t}=e;return t(["Save workflow to local"])},edit:e=>{const{normalize:t}=e;return t(["Edit description"])},fetchLocal:e=>{const{normalize:t}=e;return t(["Fetch local workflow"])},update:e=>{const{normalize:t}=e;return t(["Update"])},unpublish:e=>{const{normalize:t}=e;return t(["Unpublish"])}},variables:{title:e=>{const{normalize:t,plural:r}=e;return r([t(["Variable"]),t(["Variables"])])},name:e=>{const{normalize:t}=e;return t(["Variable name"])},assign:e=>{const{normalize:t}=e;return t(["Assign to variable"])}},protect:{title:e=>{const{normalize:t}=e;return t(["Protect workflow"])},remove:e=>{const{normalize:t}=e;return t(["Remove protection"])},button:e=>{const{normalize:t}=e;return t(["Protect"])},note:e=>{const{normalize:t}=e;return t(["Note: this password will be required later on to edit or delete the workflow."])}},locked:{title:e=>{const{normalize:t}=e;return t(["This Workflow is Protected"])},body:e=>{const{normalize:t}=e;return t(["Input the password to unlock it"])},unlock:e=>{const{normalize:t}=e;return t(["Unlock"])},messages:{"incorrect-password":e=>{const{normalize:t}=e;return t(["Incorrect password"])}}},state:{executeBy:e=>{const{normalize:t,interpolate:r,named:n}=e;return t(['Executed by: "',r(n("name")),'"'])}},table:{title:e=>{const{normalize:t,plural:r}=e;return r([t(["Table"]),t(["Tables"])])},placeholder:e=>{const{normalize:t}=e;return t(["Search or add a column"])},select:e=>{const{normalize:t}=e;return t(["Select column"])},column:{name:e=>{const{normalize:t}=e;return t(["Column name"])},type:e=>{const{normalize:t}=e;return t(["Data type"])}}},sidebar:{workflowIcon:e=>{const{normalize:t}=e;return t(["Workflow icon"])}},editor:{zoomIn:e=>{const{normalize:t}=e;return t(["Zoom in"])},zoomOut:e=>{const{normalize:t}=e;return t(["Zoom out"])},resetZoom:e=>{const{normalize:t}=e;return t(["Reset zoom"])},duplicate:e=>{const{normalize:t}=e;return t(["Duplicate"])},copy:e=>{const{normalize:t}=e;return t(["Copy"])},paste:e=>{const{normalize:t}=e;return t(["Paste"])},group:e=>{const{normalize:t}=e;return t(["Group blocks"])},ungroup:e=>{const{normalize:t}=e;return t(["Ungroup blocks"])}},settings:{saveLog:e=>{const{normalize:t}=e;return t(["Save workflow log"])},executedBlockOnWeb:e=>{const{normalize:t}=e;return t(["Show executed block on the web page"])},notification:{title:e=>{const{normalize:t}=e;return t(["Workflow notification"])},description:e=>{const{normalize:t}=e;return t(["Show workflow status (success or failed) after it executed"])},noPermission:e=>{const{normalize:t}=e;return t(['This option requires "notifications" permission to work'])}},publicId:{title:e=>{const{normalize:t}=e;return t(["Workflow public ID"])},description:e=>{const{normalize:t}=e;return t(["Set a public ID to execute the workflow via a JavaScript custom event"])}},defaultColumn:{title:e=>{const{normalize:t}=e;return t(["Insert into the default column"])},description:e=>{const{normalize:t}=e;return t(["Insert data to the default column if there's no column selected in the block"])},name:e=>{const{normalize:t}=e;return t(["Default column name"])}},autocomplete:{title:e=>{const{normalize:t}=e;return t(["Autocomplete"])},description:e=>{const{normalize:t}=e;return t(["Enable autocomplete in the input block (disable if it makes Automa unstable)"])}},clearCache:{title:e=>{const{normalize:t}=e;return t(["Clear cache"])},description:e=>{const{normalize:t}=e;return t(["Clear cache (state and loop index) of the workflow"])},info:e=>{const{normalize:t}=e;return t(["Successfully cleared workflow cache"])},btn:e=>{const{normalize:t}=e;return t(["Clear"])}},reuseLastState:{title:e=>{const{normalize:t}=e;return t(["Reuse last workflow's state"])},description:e=>{const{normalize:t}=e;return t(["Use the state data (table, variables, and global data) from the last executed workflow"])}},debugMode:{title:e=>{const{normalize:t}=e;return t(["Debug mode"])},description:e=>{const{normalize:t}=e;return t(["Execute the workflow using the Chrome DevTools Protocol"])}},restartWorkflow:{for:e=>{const{normalize:t}=e;return t(["Restart for"])},times:e=>{const{normalize:t}=e;return t(["Times"])},description:e=>{const{normalize:t}=e;return t(["Max number of times the workflow will restart"])}},onError:{title:e=>{const{normalize:t}=e;return t(["On workflow error"])},description:e=>{const{normalize:t}=e;return t(["Set the action to take if an error occurs in the workflow"])},items:{keepRunning:e=>{const{normalize:t}=e;return t(["Keep running"])},stopWorkflow:e=>{const{normalize:t}=e;return t(["Stop workflow"])},restartWorkflow:e=>{const{normalize:t}=e;return t(["Restart workflow"])}}},timeout:{title:e=>{const{normalize:t}=e;return t(["Workflow timeout (milliseconds)"])}},blockDelay:{title:e=>{const{normalize:t}=e;return t(["Block delay (milliseconds)"])},description:e=>{const{normalize:t}=e;return t(["Add delay before executing each of the blocks"])}},tabLoadTimeout:{title:e=>{const{normalize:t}=e;return t(["Tab load timeout"])},description:e=>{const{normalize:t}=e;return t(["Maximum time to load a tab in milliseconds, input 0 to disable the timeout"])}}}},collection:{description:e=>{const{normalize:t}=e;return t(["Execute your workflows in sequence"])},new:e=>{const{normalize:t}=e;return t(["New collection"])},delete:e=>{const{normalize:t}=e;return t(["Delete collection"])},add:e=>{const{normalize:t}=e;return t(["Add collection"])},rename:e=>{const{normalize:t}=e;return t(["Rename collection"])},flow:e=>{const{normalize:t}=e;return t(["Flow"])},dragDropText:e=>{const{normalize:t}=e;return t(["Drop a workflow or block in here"])},options:{atOnce:{title:e=>{const{normalize:t}=e;return t(["Execute all workflows in the collection at once"])},description:e=>{const{normalize:t}=e;return t(["Blocks will not execute when this option is used"])}}},globalData:{note:e=>{const{normalize:t}=e;return t(["This will overwrite the global data of the workflow"])}}},log:{flowId:e=>{const{normalize:t}=e;return t(["Flow ID"])},goBack:e=>{const{normalize:t,interpolate:r,named:n}=e;return t(['Go back to "',r(n("name")),"\"'s logs"])},goWorkflow:e=>{const{normalize:t}=e;return t(["Go to workflow"])},startedDate:e=>{const{normalize:t}=e;return t(["Started date"])},duration:e=>{const{normalize:t}=e;return t(["Duration"])},selectAll:e=>{const{normalize:t}=e;return t(["Select all"])},deselectAll:e=>{const{normalize:t}=e;return t(["Deselect all"])},deleteSelected:e=>{const{normalize:t}=e;return t(["Delete selected logs"])},clearLogs:{title:e=>{const{normalize:t}=e;return t(["Clear logs"])},description:e=>{const{normalize:t}=e;return t(["Are you sure you want to clear all logs?"])}},types:{stop:e=>{const{normalize:t}=e;return t(["Workflow is stopped"])},finish:e=>{const{normalize:t}=e;return t(["Finish"])}},messages:{"url-empty":e=>{const{normalize:t}=e;return t(["URL is empty"])},"invalid-url":e=>{const{normalize:t}=e;return t(["URL is not valid"])},"conditions-empty":e=>{const{normalize:t}=e;return t(["Conditions are empty"])},"invalid-proxy-host":e=>{const{normalize:t}=e;return t(["Invalid proxy host"])},"workflow-disabled":e=>{const{normalize:t}=e;return t(["Workflow is disabled"])},"selector-empty":e=>{const{normalize:t}=e;return t(["Element selector is empty"])},"invalid-body":e=>{const{normalize:t}=e;return t(["Content body is not a valid JSON"])},"invalid-active-tab":e=>{const{normalize:t,interpolate:r,named:n}=e;return t(['"',r(n("url")),'" is an invalid URL'])},"empty-spreadsheet-id":e=>{const{normalize:t}=e;return t(["Spreadsheet ID is empty"])},"invalid-loop-data":e=>{const{normalize:t}=e;return t(["Invalid data to loop through"])},"empty-workflow":e=>{const{normalize:t}=e;return t(["You must select a workflow first"])},"active-tab-removed":e=>{const{normalize:t}=e;return t(["Workflow active tab was removed"])},"empty-spreadsheet-range":e=>{const{normalize:t}=e;return t(["Spreadsheet range is empty"])},"stop-timeout":e=>{const{normalize:t}=e;return t(["Workflow was stopped due to timeout"])},"no-file-access":e=>{const{normalize:t}=e;return t(["Automa doesn't have access to the file"])},"no-workflow":e=>{const{normalize:t,interpolate:r,named:n}=e;return t(["Can't find a workflow with the ID \"",r(n("workflowId")),'"'])},"no-match-tab":e=>{const{normalize:t,interpolate:r,named:n}=e;return t(["Can't find a tab matching the pattern \"",r(n("pattern")),'"'])},"no-clipboard-acces":e=>{const{normalize:t}=e;return t(["Don't have permission to access the clipboard"])},"browser-not-supported":e=>{const{normalize:t,interpolate:r,named:n}=e;return t(["This feature not supported in ",r(n("browser"))," browser"])},"element-not-found":e=>{const{normalize:t,interpolate:r,named:n}=e;return t(["Can't find an element with the selector \"",r(n("selector")),'"'])},"no-permission":e=>{const{normalize:t,interpolate:r,named:n}=e;return t(["Don't have \"",r(n("permission")),'" permission to perform this action'])},"not-iframe":e=>{const{normalize:t,interpolate:r,named:n}=e;return t(['Element with "',r(n("selector")),'" selector is not an iframe element'])},"iframe-not-found":e=>{const{normalize:t,interpolate:r,named:n}=e;return t(["Can't find an iframe element with the selector \"",r(n("selector")),'"'])},"workflow-infinite-loop":e=>{const{normalize:t}=e;return t(["Can't execute the workflow to prevent an infinite loop"])},"not-debug-mode":e=>{const{normalize:t}=e;return t(["The workflow must run in debug mode for this block to work properly"])},"no-iframe-id":e=>{const{normalize:t,interpolate:r,named:n}=e;return t(["Can't find the Frame ID for the iframe element with the selector \"",r(n("selector")),'"'])},"no-tab":e=>{const{normalize:t,interpolate:r,named:n}=e;return t(['Can\'t connect to a tab, use "New tab" or "Active tab" block before using the "',r(n("name")),'" block'])}},description:{text:e=>{const{normalize:t,interpolate:r,named:n}=e;return t([r(n("status"))," on ",r(n("date"))," in ",r(n("duration"))])},status:{success:e=>{const{normalize:t}=e;return t(["Succeeded"])},error:e=>{const{normalize:t}=e;return t(["Failed"])},stopped:e=>{const{normalize:t}=e;return t(["Stopped"])}}},delete:{title:e=>{const{normalize:t}=e;return t(["Delete log"])},description:e=>{const{normalize:t}=e;return t(["Are you sure you want to delete all the selected logs?"])}},exportData:{title:e=>{const{normalize:t}=e;return t(["Export data"])},types:{json:e=>{const{normalize:t}=e;return t(["JSON"])},csv:e=>{const{normalize:t}=e;return t(["CSV"])},"plain-text":e=>{const{normalize:t}=e;return t(["Plain text"])}}},filter:{title:e=>{const{normalize:t}=e;return t(["Filter"])},byStatus:e=>{const{normalize:t}=e;return t(["By status"])},byDate:{title:e=>{const{normalize:t}=e;return t(["By date"])},items:{lastDay:e=>{const{normalize:t}=e;return t(["Last day"])},last7Days:e=>{const{normalize:t}=e;return t(["Last seven days"])},last30Days:e=>{const{normalize:t}=e;return t(["Last thirty days"])}}}}},components:{pagination:{text1:e=>{const{normalize:t}=e;return t(["Showing"])},text2:e=>{const{normalize:t,interpolate:r,named:n}=e;return t(["items out of ",r(n("count"))])},nextPage:e=>{const{normalize:t}=e;return t(["Next page"])},currentPage:e=>{const{normalize:t}=e;return t(["Current page"])},prevPage:e=>{const{normalize:t}=e;return t(["Previous page"])},of:e=>{const{normalize:t,interpolate:r,named:n}=e;return t(["of ",r(n("page"))])}}}}}}]);