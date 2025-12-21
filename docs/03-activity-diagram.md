# Activity Diagram - INVESTRA
## Investment Analytics Indonesia Dashboard

---

## 1. Activity Diagram - User Authentication Flow

```mermaid
flowchart TD
    A([Start]) --> B[User Opens Website]
    B --> C[View Landing Page]
    C --> D{Click Login Button?}
    D -->|No| E[Browse Landing Page Content]
    E --> C
    D -->|Yes| F[Navigate to Login Page]
    F --> G[Display Login Form]
    G --> H[Enter Username]
    H --> I[Enter Password]
    I --> J[Click Submit Button]
    J --> K{Validate Credentials}
    K -->|Invalid| L[Display Error Message]
    L --> G
    K -->|Valid| M[Create User Session]
    M --> N[Redirect to Dashboard]
    N --> O[Display Dashboard Summary]
    O --> P([End])
```

---

## 2. Activity Diagram - Dashboard Navigation Flow

```mermaid
flowchart TD
    A([Start]) --> B[User at Dashboard]
    B --> C{Select Menu Item}
    
    C -->|Dashboard| D[Display Dashboard View]
    D --> E[Load Summary Cards]
    E --> F[Load Interactive Map]
    F --> G[Load PCA Charts]
    G --> H[Display Key Findings]
    
    C -->|Upload| I[Display Upload View]
    I --> J[Show Upload Instructions]
    J --> K[Show Upload Zone]
    K --> L[Show Current Dataset Info]
    
    C -->|PCA Analysis| M[Display PCA View]
    M --> N[Show PCA Summary Cards]
    N --> O[Display PCA Charts]
    O --> P[Show Interpretation Section]
    
    C -->|Clustering| Q[Display Clustering View]
    Q --> R[Show Cluster Summary]
    R --> S[Display Cluster Details]
    S --> T[Show Province List per Cluster]
    
    C -->|Visualization| U[Display Visualization View]
    U --> V[Render Interactive Map]
    V --> W[Display Chart Options]
    W --> X[Show Selected Charts]
    
    C -->|Policy| Y[Display Policy View]
    Y --> Z[Show Cluster Summary Cards]
    Z --> AA[Display Policy Accordion]
    AA --> AB{Export PDF?}
    AB -->|Yes| AC[Generate PDF Report]
    AB -->|No| AD[Continue Browsing]
    
    C -->|About| AE[Display About View]
    AE --> AF[Show System Information]
    AF --> AG[Display Methodology]
    AG --> AH[Show Data Sources]
    
    C -->|Logout| AI[Clear User Session]
    AI --> AJ[Redirect to Landing Page]
    
    H --> AK([End])
    L --> AK
    P --> AK
    T --> AK
    X --> AK
    AC --> AK
    AD --> AK
    AH --> AK
    AJ --> AK
```

---

## 3. Activity Diagram - Data Upload Process

```mermaid
flowchart TD
    A([Start]) --> B[User Selects Upload Menu]
    B --> C[Display Upload Page]
    C --> D[User Reviews Format Requirements]
    D --> E{Choose Action}
    
    E -->|Download Template| F[Download CSV Template]
    F --> G[User Fills Template Data]
    G --> E
    
    E -->|Select File| H[Open File Dialog]
    H --> I[User Selects File]
    I --> J{Check File Type}
    J -->|Invalid Type| K[Display File Type Error]
    K --> H
    J -->|Valid Type| L{Check File Size}
    L -->|> 10MB| M[Display Size Error]
    M --> H
    L -->|<= 10MB| N[Read File Content]
    N --> O{Validate Columns}
    O -->|Missing Columns| P[Display Column Error]
    P --> H
    O -->|Valid Columns| Q{Validate Data Values}
    Q -->|Invalid Values| R[Display Data Error]
    R --> H
    Q -->|Valid Values| S[Process Data]
    S --> T[Store Dataset]
    T --> U[Display Success Message]
    U --> V[Update Dataset Info]
    V --> W([End])
```

---

## 4. Activity Diagram - PCA Analysis Workflow

```mermaid
flowchart TD
    A([Start]) --> B[User Opens PCA Analysis]
    B --> C{Dataset Available?}
    C -->|No| D[Display Upload Required Message]
    D --> E[Redirect to Upload Page]
    E --> F([End - Requires Data])
    
    C -->|Yes| G[Load Dataset]
    G --> H[Standardize Variables]
    H --> I[Calculate Correlation Matrix]
    I --> J[Extract Eigenvalues]
    J --> K[Calculate Eigenvectors]
    K --> L[Sort by Explained Variance]
    L --> M[Select Principal Components]
    M --> N[Calculate Loading Factors]
    N --> O[Generate Visualizations]
    O --> P[Display PC1 Summary - 45.2%]
    P --> Q[Display PC2 Summary - 28.7%]
    Q --> R[Display PC3 Summary - 15.3%]
    R --> S[Display PC4 Summary - 10.8%]
    S --> T[Show Loading Factor Chart]
    T --> U[Show Explained Variance Chart]
    U --> V[Display Interpretation]
    V --> W([End])
```

---

## 5. Activity Diagram - K-Means Clustering Process

```mermaid
flowchart TD
    A([Start]) --> B[User Opens Clustering View]
    B --> C{PCA Results Available?}
    C -->|No| D[Run PCA Analysis First]
    D --> C
    
    C -->|Yes| E[Load PCA Scores]
    E --> F[Initialize K=3 Centroids]
    F --> G[Assign Provinces to Nearest Centroid]
    G --> H[Calculate New Centroids]
    H --> I{Centroids Converged?}
    I -->|No| G
    I -->|Yes| J[Finalize Cluster Assignments]
    J --> K[Calculate Cluster Statistics]
    
    K --> L[Cluster 1: High Investment]
    L --> M[6 Provinces Assigned]
    M --> N[Calculate Avg PDRB, IPM, Investment]
    
    K --> O[Cluster 2: Medium Investment]
    O --> P[14 Provinces Assigned]
    P --> Q[Calculate Avg PDRB, IPM, Investment]
    
    K --> R[Cluster 3: Low Investment]
    R --> S[14 Provinces Assigned]
    S --> T[Calculate Avg PDRB, IPM, Investment]
    
    N --> U[Display Cluster Details]
    Q --> U
    T --> U
    
    U --> V[Render Interactive Map]
    V --> W[Color Provinces by Cluster]
    W --> X([End])
```

---

## 6. Activity Diagram - Policy Recommendation Generation

```mermaid
flowchart TD
    A([Start]) --> B[User Opens Policy View]
    B --> C[Load Cluster Analysis Data]
    C --> D[Process Cluster 1 Characteristics]
    D --> E[Generate Cluster 1 Recommendations]
    E --> F[- Diversifikasi Industri]
    E --> G[- Desentralisasi Investasi]
    E --> H[- Hub Inovasi]
    
    C --> I[Process Cluster 2 Characteristics]
    I --> J[Generate Cluster 2 Recommendations]
    J --> K[- Peningkatan Infrastruktur]
    J --> L[- Penguatan Daya Saing]
    J --> M[- Pengembangan SDM]
    
    C --> N[Process Cluster 3 Characteristics]
    N --> O[Generate Cluster 3 Recommendations]
    O --> P[- Insentif Fiskal]
    O --> Q[- Akses Pendidikan & Kesehatan]
    O --> R[- Promosi Investasi]
    
    F & G & H & K & L & M & P & Q & R --> S[Compile All Recommendations]
    S --> T[Display in Accordion Format]
    T --> U{User Requests PDF?}
    U -->|No| V([End - View Only])
    U -->|Yes| W[Generate PDF Layout]
    W --> X[Add Header & Logo]
    X --> Y[Add Executive Summary]
    Y --> Z[Add Cluster Details]
    Z --> AA[Add Recommendations]
    AA --> AB[Add Appendix]
    AB --> AC[Create PDF File]
    AC --> AD[Download PDF]
    AD --> AE([End - PDF Downloaded])
```

---

## 7. Activity Diagram - Logout Process

```mermaid
flowchart TD
    A([Start]) --> B[User Clicks Logout]
    B --> C[Display Confirmation Dialog]
    C --> D{Confirm Logout?}
    D -->|No| E[Close Dialog]
    E --> F[Return to Dashboard]
    F --> G([End - Session Active])
    D -->|Yes| H[Clear User Session]
    H --> I[Clear Local State]
    I --> J[Navigate to Landing Page]
    J --> K[Display Landing Page]
    K --> L([End - Session Terminated])
```
