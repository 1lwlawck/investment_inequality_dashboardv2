# Arsitektur Sistem INVESTRA
## Investment Analytics Indonesia Dashboard

---

## 1. Arsitektur Sistem Overview

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

## 2. Use Case Diagram

```mermaid
flowchart LR
    subgraph Actors
        PU((Public User))
        AU((Admin/Analyst))
    end
    
    subgraph "INVESTRA System"
        UC1[View Landing Page]
        UC2[Login to System]
        UC3[View Dashboard Summary]
        UC4[Upload Investment Data]
        UC5[View PCA Analysis]
        UC6[View Clustering Results]
        UC7[View Interactive Map]
        UC8[View Data Visualizations]
        UC9[View Policy Recommendations]
        UC10[Export PDF Report]
        UC11[View System Information]
        UC12[Logout]
    end
    
    PU --> UC1
    PU --> UC2
    
    AU --> UC1
    AU --> UC2
    AU --> UC3
    AU --> UC4
    AU --> UC5
    AU --> UC6
    AU --> UC7
    AU --> UC8
    AU --> UC9
    AU --> UC10
    AU --> UC11
    AU --> UC12
    
    UC3 -.->|includes| UC7
    UC5 -.->|includes| UC8
    UC6 -.->|includes| UC7
    UC9 -.->|extends| UC10
```

### Deskripsi Use Case

| ID | Use Case | Aktor | Deskripsi |
|----|----------|-------|-----------|
| UC1 | View Landing Page | Public, Admin | Melihat halaman utama sistem |
| UC2 | Login to System | Public, Admin | Autentikasi untuk akses dashboard |
| UC3 | View Dashboard Summary | Admin | Melihat ringkasan metrik investasi |
| UC4 | Upload Investment Data | Admin | Mengunggah dataset investasi provinsi |
| UC5 | View PCA Analysis | Admin | Melihat hasil Principal Component Analysis |
| UC6 | View Clustering Results | Admin | Melihat hasil K-Means Clustering |
| UC7 | View Interactive Map | Admin | Melihat peta distribusi klaster |
| UC8 | View Data Visualizations | Admin | Melihat grafik dan chart data |
| UC9 | View Policy Recommendations | Admin | Melihat rekomendasi kebijakan |
| UC10 | Export PDF Report | Admin | Mengunduh laporan PDF |
| UC11 | View System Information | Admin | Melihat informasi tentang sistem |
| UC12 | Logout | Admin | Keluar dari sistem |

---

## 3. Activity Diagram

### 3.1 Activity Diagram - User Login Flow

```mermaid
flowchart TD
    A([Start]) --> B[User Opens Website]
    B --> C[View Landing Page]
    C --> D{Click Login?}
    D -->|No| C
    D -->|Yes| E[Navigate to Login Page]
    E --> F[Enter Username & Password]
    F --> G{Validate Credentials}
    G -->|Invalid| H[Show Error Message]
    H --> F
    G -->|Valid| I[Redirect to Dashboard]
    I --> J[Display Dashboard Summary]
    J --> K([End])
```

### 3.2 Activity Diagram - Data Analysis Workflow

```mermaid
flowchart TD
    A([Start]) --> B[User Accesses Dashboard]
    B --> C{Select Menu}
    
    C -->|Upload Data| D[Open Upload View]
    D --> E[Select File CSV/Excel]
    E --> F[Validate File Format]
    F --> G{Valid?}
    G -->|No| H[Show Error]
    H --> D
    G -->|Yes| I[Process Data]
    I --> J[Store Dataset]
    
    C -->|PCA Analysis| K[Open PCA View]
    K --> L[Load Dataset]
    L --> M[Execute PCA Algorithm]
    M --> N[Display Component Loadings]
    N --> O[Show Explained Variance Chart]
    
    C -->|Clustering| P[Open Clustering View]
    P --> Q[Load PCA Results]
    Q --> R[Execute K-Means Algorithm]
    R --> S[Assign Provinces to Clusters]
    S --> T[Display Cluster Details]
    
    C -->|Visualization| U[Open Visualization View]
    U --> V[Load Cluster Data]
    V --> W[Render Interactive Map]
    W --> X[Display Charts & Graphs]
    
    C -->|Policy| Y[Open Policy View]
    Y --> Z[Load Cluster Analysis]
    Z --> AA[Generate Recommendations]
    AA --> AB[Display Policy Suggestions]
    AB --> AC{Export PDF?}
    AC -->|Yes| AD[Generate PDF Report]
    AC -->|No| AE([End])
    AD --> AE
    
    J --> AE
    O --> AE
    T --> AE
    X --> AE
```

---

## 4. Sequence Diagram

### 4.1 Sequence Diagram - Login Process

```mermaid
sequenceDiagram
    actor User
    participant LP as LandingPage
    participant LV as LoginView
    participant Router as Next.js Router
    participant DL as DashboardLayout
    participant DV as DashboardView

    User->>LP: Visit website (/)
    LP-->>User: Display landing page
    User->>LP: Click "Login" button
    LP->>Router: Navigate to /login
    Router->>LV: Render LoginView
    LV-->>User: Display login form
    User->>LV: Enter credentials
    User->>LV: Click "Masuk"
    LV->>LV: Validate credentials
    alt Invalid credentials
        LV-->>User: Show error message
    else Valid credentials
        LV->>Router: Navigate to /dashboard
        Router->>DL: Render DashboardLayout
        DL->>DV: Render DashboardView
        DV-->>User: Display dashboard
    end
```

### 4.2 Sequence Diagram - View Clustering Analysis

```mermaid
sequenceDiagram
    actor User
    participant Sidebar
    participant Router as Next.js Router
    participant CV as ClusteringView
    participant Data as Static Data
    participant Map as InteractiveMap

    User->>Sidebar: Click "K-Means Clustering"
    Sidebar->>Router: Navigate to /dashboard/clustering
    Router->>CV: Render ClusteringView
    CV->>Data: Fetch cluster data
    Data-->>CV: Return 3 clusters with provinces
    CV-->>User: Display cluster summary cards
    CV-->>User: Display cluster details (metrics, characteristics)
    CV->>Map: Initialize map with cluster data
    Map-->>User: Render interactive Indonesia map
    User->>Map: Hover over province
    Map-->>User: Show province tooltip with details
```

### 4.3 Sequence Diagram - Dashboard Navigation

```mermaid
sequenceDiagram
    actor User
    participant TN as TopNav
    participant SB as Sidebar
    participant DL as DashboardLayout
    participant Views as View Components
    participant Charts as Chart Components

    User->>DL: Access /dashboard
    DL->>TN: Render TopNav
    DL->>SB: Render Sidebar
    DL->>Views: Render DashboardView
    Views->>Charts: Load InteractiveMap
    Views->>Charts: Load PCAChart
    Charts-->>User: Display visualizations
    
    loop Navigation
        User->>SB: Select menu item
        SB->>DL: Update active view
        DL->>Views: Render selected view
        Views-->>User: Display view content
    end
    
    User->>TN: Click Logout
    TN->>DL: Trigger logout
    DL-->>User: Redirect to Landing Page
```

---

## 5. Class Diagram

```mermaid
classDiagram
    class LandingPage {
        +newsItems: NewsItem[]
        +render(): JSX
    }
    
    class LoginView {
        -username: string
        -password: string
        -showPassword: boolean
        -error: string
        -isLoading: boolean
        +handleSubmit(): void
        +render(): JSX
    }
    
    class DashboardLayout {
        +children: ReactNode
        +handleLogout(): void
        +getActiveView(): string
        +handleViewChange(view): void
        +render(): JSX
    }
    
    class TopNav {
        +onLogout: Function
        +render(): JSX
    }
    
    class Sidebar {
        +activeView: string
        +setActiveView: Function
        -menuItems: MenuItem[]
        +render(): JSX
    }
    
    class DashboardView {
        -summaryCards: SummaryCard[]
        -policyInsights: PolicyInsight[]
        +render(): JSX
    }
    
    class InteractiveMap {
        -zoom: number
        -hoveredProvince: Province
        -provinces: Province[]
        -clusterColors: Record
        -clusterLabels: Record
        +setZoom(zoom): void
        +setHoveredProvince(p): void
        +render(): JSX
    }
    
    class PCAChart {
        -pcaData: PCAData[]
        -factorLoadings: FactorLoading[]
        +render(): JSX
    }
    
    class ClusteringView {
        -clusters: Cluster[]
        +render(): JSX
    }
    
    class PolicyRecommendations {
        -recommendations: Recommendation[]
        +render(): JSX
    }
    
    class Province {
        +name: string
        +cluster: number
        +x: number
        +y: number
        +pdrb: number
        +ipm: number
        +pma: number
    }
    
    class Cluster {
        +id: number
        +name: string
        +color: string
        +count: number
        +avgPDRB: number
        +avgIPM: number
        +provinces: string[]
        +characteristics: string[]
    }
    
    DashboardLayout --> TopNav : contains
    DashboardLayout --> Sidebar : contains
    DashboardLayout --> DashboardView : renders
    DashboardLayout --> ClusteringView : renders
    DashboardView --> InteractiveMap : uses
    DashboardView --> PCAChart : uses
    ClusteringView --> Cluster : displays
    InteractiveMap --> Province : displays
    PolicyRecommendations --> Cluster : references
```

---

## 6. Component Hierarchy Diagram

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

## 7. Data Flow Diagram

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

## 8. Technology Stack

| Layer | Technology |
|-------|------------|
| **Frontend Framework** | Next.js 14 (App Router) |
| **UI Library** | React 18 |
| **Styling** | Tailwind CSS |
| **UI Components** | Radix UI + shadcn/ui |
| **Charts** | Recharts |
| **Icons** | Lucide React |
| **Language** | TypeScript |
| **Build Tool** | Next.js Built-in |

---

## 9. File Structure

```
investment_inequality_dashboard/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Landing page (/)
│   ├── globals.css              # Global styles
│   ├── login/
│   │   └── page.tsx             # Login page
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
│   ├── ui/                      # UI primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── tabs.tsx
│   │   └── ...
│   ├── LandingPage.tsx
│   ├── LoginView.tsx
│   ├── TopNav.tsx
│   ├── Sidebar.tsx
│   ├── DashboardView.tsx
│   ├── InteractiveMap.tsx
│   ├── PCAChart.tsx
│   └── ...
├── lib/
│   └── utils.ts                 # Utility functions
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 10. Kesimpulan

Sistem INVESTRA dibangun dengan arsitektur **Client-Side Rendering** menggunakan Next.js 14 App Router dengan pendekatan **Component-Based Architecture**. Sistem ini memisahkan:

1. **Presentation Layer**: Halaman dan routing berbasis file system
2. **Component Layer**: Komponen UI yang reusable
3. **Data Layer**: Static data untuk simulasi (dapat diganti dengan API)

Diagram UML yang dibuat mencakup:
- **Use Case Diagram**: 12 use cases untuk 2 aktor
- **Activity Diagram**: Workflow login dan analisis data
- **Sequence Diagram**: Interaksi antar komponen
- **Class Diagram**: Struktur komponen dan data models
