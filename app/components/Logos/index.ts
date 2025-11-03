import ReactLogo from './React.svg';
import NextjsLogo from './Nextjs.svg';
import NodejsLogo from './Nodejs.svg';
import ExpressLogo from './Express.svg';
import ASPNetCoreLogo from './ASPNetCore.svg';
import TypeScriptLogo from './TypeScript.svg';
import JavaScriptLogo from './JavaScript.svg';
import MUILogo from './MUI.svg';
import TailwindCSSLogo from './TailwindCSS.svg';

// Core Systems & Languages
import PythonLogo from './Python.svg';
import CplusplusLogo from './C++.svg';
// import JavaLogo from './Java.svg';
import CLogo from './C.svg';
import CsharpLogo from './Csharp.svg';

// Data & Business Intelligence
import PostgresqlLogo from './PostgreSQL.svg';
import MongoDBLogo from './MongoDB.svg';
import SQLLogo from './SQL.svg';
// import PowerBILogo from './PowerBI.svg';
import TableauLogo from './Tableau.svg';
import ExcelLogo from './Excel.svg'; 

// Workflow & DevOps
import GitLogo from './Git.svg';
import GitHubLogo from './GitHub.svg';
import DockerLogo from './Docker.svg';
import PostmanLogo from './Postman.svg';
import ReactNativeLogo from './ReactNative.svg';


export const Logos: Record<string, any> = {
    // Full Stack Development
    React: ReactLogo,
    Nextjs: NextjsLogo,
    Nodejs: NodejsLogo,
    Express: ExpressLogo,
    ASPNetCore: ASPNetCoreLogo,
    TypeScript: TypeScriptLogo,
    JavaScript: JavaScriptLogo,
    MUI: MUILogo,
    TailwindCSS: TailwindCSSLogo,

    // Core Systems & Languages
    Python: PythonLogo,
    Cplusplus: CplusplusLogo, 
    // Java: JavaLogo,         
    C: CLogo,
    Csharp: CsharpLogo,       

    // Data & Business Intelligence
    PostgreSQL: PostgresqlLogo,
    MongoDB: MongoDBLogo,
    SQL: SQLLogo,
    // PowerBI: PowerBILogo,
    // Tableau: TableauLogo,
    // Excel: ExcelLogo,

    // Workflow & DevOps
    Git: GitLogo,
    GitHub: GitHubLogo,
    Docker: DockerLogo,
    Postman: PostmanLogo,
    ReactNative: ReactNativeLogo,
};


export type LogoKey = keyof typeof Logos;