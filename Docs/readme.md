# NgGoogleCharts

Renew Date: 2024.08.08

## Notes

https://angular.io/cli/new

````
--routing		boolean				Enable routing in the initial project.
--skip-tests	boolean false		Do not generate "spec.ts" test files for the new project. 								
--style	css | scss | sass | less	The file extension or preprocessor to use for style files.

--strict		boolean	true		Creates a workspace with stricter type checking and stricter bundle budgets settings.	
--standalone	boolean	true		Creates an application based upon the standalone API, without NgModules.
--ssr			boolean				Creates an application with Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering) enabled.

--no-standalone
````

##### Init

https://angular.io/guide/creating-libraries  
Creating a library with a test application

````
> Needs     --style=scss --skip-tests=true --routing=true
> Defaults  --strict=true --ssr=true --standalone=true
````

````shell

ng new NgGoogleCharts --style=scss --skip-tests=true --routing=true --strict=true --ssr=true --standalone=true
cd NgGoogleCharts
ng generate library GoogleChartsAngular --prefix=ql 

```
