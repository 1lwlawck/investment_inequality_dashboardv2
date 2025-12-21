# Arsitektur Sistem INVESTRA
## Investment Analytics Indonesia Dashboard

---

## 1. Overview Arsitektur

```mermaid
flowchart TB
    subgraph Client["🖥️ Client Layer"]
        Browser[Web Browser]
    end
    
    subgraph Presentation["📱 Presentation Layer - Next.js 14"]
        subgraph Public["Public Routes"]
            LP[Landing Page<br/>/]
            Login[Login Page<br/>/login]
        end
        
        subgraph Protected["Protected Routes - /dashboard/*"]
            DL[Dashboard Layout]
            DV[Dashboard View]
            UV[Upload View]
            PCA[PCA Analysis]
            CL[Clustering View]
            VIS[Visualization]
            POL[Policy View]
            ABT[About View]
        end
    end
    
    subgraph Components["🧩 Component Layer"]
        UI[UI Components<br/>Button, Card, Tabs, etc.]
        Charts[Chart Components<br/>PCAChart, InteractiveMap]
        Layout[Layout Components<br/>TopNav, Sidebar, Footer]
    end
    
    subgraph Data["📊 Data Layer"]
        Static[Static Data<br/>Province, Cluster, PCA Results]
        State[Client State<br/>React useState/Context]
    end
    
    Browser --> Public
    Browser --> Protected
    Protected --> DL
    DL --> DV & UV & PCA & CL & VIS & POL & ABT
    DV & UV & PCA & CL & VIS & POL & ABT --> Components
    Components --> UI & Charts & Layout
    Components --> Data
```

---

## 2. Arsitektur 3-Layer

| Layer | Deskripsi | Teknologi |
|-------|-----------|-----------|
| **Presentation** | Halaman dan routing | Next.js 14 App Router |
| **Component** | UI dan logic komponen | React, Radix UI, Recharts |
| **Data** | Static data dan state management | React useState, Constants |

---

## 3. Technology Stack

```mermaid
flowchart LR
    subgraph Frontend["Frontend Stack"]
        Next[Next.js 14]
        React[React 18]
        TS[TypeScript]
    end
    
    subgraph Styling["Styling"]
        TW[Tailwind CSS]
        Radix[Radix UI]
        Lucide[Lucide Icons]
    end
    
    subgraph Charts["Data Visualization"]
        Recharts[Recharts]
        SVG[Custom SVG Maps]
    end
    
    Frontend --> Styling
    Frontend --> Charts
```

---

## 4. Component Hierarchy

```mermaid
flowchart TD
    subgraph App["Next.js App Router"]
        RootLayout[RootLayout<br/>app/layout.tsx]
        
        subgraph PublicPages["Public Pages"]
            HomePage[page.tsx → LandingPage]
            LoginPage[login/page.tsx → LoginView]
        end
        
        subgraph DashboardPages["Dashboard Pages"]
            DashLayout[dashboard/layout.tsx]
            DashPage[dashboard/page.tsx]
            UploadPage[dashboard/upload/page.tsx]
            PCAPage[dashboard/pca/page.tsx]
            ClusterPage[dashboard/clustering/page.tsx]
            VisPage[dashboard/visualization/page.tsx]
            PolicyPage[dashboard/policy/page.tsx]
            AboutPage[dashboard/about/page.tsx]
        end
    end
    
    RootLayout --> HomePage
    RootLayout --> LoginPage
    RootLayout --> DashLayout
    DashLayout --> DashPage
    DashLayout --> UploadPage
    DashLayout --> PCAPage
    DashLayout --> ClusterPage
    DashLayout --> VisPage
    DashLayout --> PolicyPage
    DashLayout --> AboutPage
```

---

## 5. Data Flow Diagram

```mermaid
flowchart LR
    subgraph External["External Data Sources"]
        BPS[(BPS Data)]
        BKPM[(BKPM Data)]
    end
    
    subgraph Process["Data Processing"]
        Upload[Data Upload]
        PCA[PCA Analysis]
        KMeans[K-Means Clustering]
    end
    
    subgraph Storage["Data Storage"]
        Static[(Static JSON/Constants)]
    end
    
    subgraph Output["Output/Display"]
        Map[Interactive Map]
        Charts[Charts & Graphs]
        Tables[Data Tables]
        Policy[Policy Recommendations]
        PDF[PDF Reports]
    end
    
    BPS --> Upload
    BKPM --> Upload
    Upload --> Static
    Static --> PCA
    PCA --> KMeans
    KMeans --> Static
    Static --> Map
    Static --> Charts
    Static --> Tables
    Static --> Policy
    Policy --> PDF
```

---

## 6. File Structure

```
investment_inequality_dashboard/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Landing page (/)
│   ├── globals.css              # Global styles
│   ├── login/page.tsx           # Login page
│   └── dashboard/
│       ├── layout.tsx           # Dashboard layout
│       ├── page.tsx             # Dashboard main
│       ├── upload/page.tsx
│       ├── pca/page.tsx
│       ├── clustering/page.tsx
│       ├── visualization/page.tsx
│       ├── policy/page.tsx
│       └── about/page.tsx
├── components/                   # Reusable components
│   ├── ui/                      # UI primitives (10 files)
│   └── *.tsx                    # Main components (17 files)
├── lib/utils.ts                 # Utility functions
├── next.config.js
├── tailwind.config.ts
└── package.json
```
