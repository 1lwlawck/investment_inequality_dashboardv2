# Sequence Diagram - INVESTRA
## Investment Analytics Indonesia Dashboard

---

## 1. Sequence Diagram - User Login Process

```mermaid
sequenceDiagram
    actor User
    participant Browser
    participant LP as LandingPage
    participant Router as Next.js Router
    participant LV as LoginView
    participant DL as DashboardLayout
    participant DV as DashboardView

    User->>Browser: Open website
    Browser->>Router: GET /
    Router->>LP: Render LandingPage
    LP-->>Browser: Display landing page
    Browser-->>User: Show landing page
    
    User->>LP: Click "Login" button
    LP->>Router: Navigate to /login
    Router->>LV: Render LoginView
    LV-->>Browser: Display login form
    Browser-->>User: Show login form
    
    User->>LV: Enter username "admin"
    User->>LV: Enter password "investra2025"
    User->>LV: Click "Masuk" button
    
    LV->>LV: setIsLoading(true)
    LV->>LV: Validate credentials
    
    alt Invalid Credentials
        LV->>LV: setError("Username atau password salah")
        LV->>LV: setIsLoading(false)
        LV-->>User: Display error message
    else Valid Credentials
        LV->>Router: router.push("/dashboard")
        Router->>DL: Render DashboardLayout
        DL->>DV: Render DashboardView
        DV-->>Browser: Display dashboard
        Browser-->>User: Show dashboard
    end
```

---

## 2. Sequence Diagram - Dashboard Initialization

```mermaid
sequenceDiagram
    actor User
    participant Browser
    participant DL as DashboardLayout
    participant TN as TopNav
    participant SB as Sidebar
    participant DV as DashboardView
    participant IM as InteractiveMap
    participant PC as PCAChart
    participant Data as Static Data

    User->>Browser: Navigate to /dashboard
    Browser->>DL: Render DashboardLayout
    
    par Render Layout Components
        DL->>TN: Render TopNav
        TN->>TN: Initialize notifications
        TN-->>DL: TopNav ready
    and
        DL->>SB: Render Sidebar
        SB->>SB: Set activeView = "dashboard"
        SB-->>DL: Sidebar ready
    end
    
    DL->>DV: Render DashboardView
    DV->>Data: Load summary cards data
    Data-->>DV: Return 4 summary cards
    
    par Load Visualizations
        DV->>IM: Initialize InteractiveMap
        IM->>Data: Load provinces data
        Data-->>IM: Return 34 provinces
        IM->>IM: Render SVG map
        IM-->>DV: Map ready
    and
        DV->>PC: Initialize PCAChart
        PC->>Data: Load PCA data
        Data-->>PC: Return PCA results
        PC->>PC: Render Recharts
        PC-->>DV: Charts ready
    end
    
    DV-->>Browser: Dashboard complete
    Browser-->>User: Display full dashboard
```

---

## 3. Sequence Diagram - Navigation Between Views

```mermaid
sequenceDiagram
    actor User
    participant SB as Sidebar
    participant Router as Next.js Router
    participant DL as DashboardLayout
    participant Views as View Components
    participant Data as Static Data

    User->>SB: Click "Analisis PCA"
    SB->>DL: handleViewChange("pca")
    DL->>Router: router.push("/dashboard/pca")
    Router->>Views: Render PCAAnalysisView
    Views->>Data: Load PCA data
    Data-->>Views: Return PCA results
    Views-->>User: Display PCA Analysis

    User->>SB: Click "K-Means Clustering"
    SB->>DL: handleViewChange("clustering")
    DL->>Router: router.push("/dashboard/clustering")
    Router->>Views: Render ClusteringView
    Views->>Data: Load cluster data
    Data-->>Views: Return 3 clusters
    Views-->>User: Display Clustering Results

    User->>SB: Click "Visualisasi Data"
    SB->>DL: handleViewChange("visualization")
    DL->>Router: router.push("/dashboard/visualization")
    Router->>Views: Render VisualizationView
    Views->>Data: Load visualization data
    Data-->>Views: Return chart data
    Views-->>User: Display Visualizations
```

---

## 4. Sequence Diagram - Interactive Map Interaction

```mermaid
sequenceDiagram
    actor User
    participant IM as InteractiveMap
    participant State as React State
    participant Tooltip as Tooltip Component

    User->>IM: View map
    IM->>IM: Render 34 province markers
    IM-->>User: Display map with colored clusters

    User->>IM: Hover over Jakarta marker
    IM->>State: setHoveredProvince(Jakarta)
    State-->>Tooltip: Update tooltip data
    Tooltip->>Tooltip: Calculate position
    Tooltip-->>User: Display tooltip with:<br/>- Nama: DKI Jakarta<br/>- Klaster: 1<br/>- PDRB: Rp 2842.5 T<br/>- IPM: 81.1<br/>- PMA: Rp 125.4 M

    User->>IM: Move mouse away
    IM->>State: setHoveredProvince(null)
    State-->>Tooltip: Hide tooltip
    Tooltip-->>User: Tooltip hidden

    User->>IM: Click Zoom In button
    IM->>State: setZoom(zoom + 0.2)
    State-->>IM: Update transform scale
    IM-->>User: Map zoomed in

    User->>IM: Click Reset button
    IM->>State: setZoom(1)
    State-->>IM: Reset transform scale
    IM-->>User: Map at default zoom
```

---

## 5. Sequence Diagram - Upload Data Flow

```mermaid
sequenceDiagram
    actor User
    participant UV as UploadDataView
    participant Input as File Input
    participant Validator as Data Validator
    participant Storage as Data Storage
    participant UI as UI Components

    User->>UV: Navigate to Upload page
    UV-->>User: Display upload instructions

    User->>UV: Click "Unduh Template"
    UV->>UV: Generate CSV template
    UV-->>User: Download template.csv

    User->>Input: Click "Pilih File"
    Input-->>User: Open file dialog
    User->>Input: Select investment_data.xlsx
    Input->>Validator: Validate file

    Validator->>Validator: Check file type
    alt Invalid file type
        Validator-->>UI: Show error "Format tidak valid"
        UI-->>User: Display error alert
    else Valid file type
        Validator->>Validator: Check file size
        alt File too large
            Validator-->>UI: Show error "Ukuran melebihi 10MB"
            UI-->>User: Display error alert
        else Valid size
            Validator->>Validator: Parse file content
            Validator->>Validator: Validate required columns
            alt Missing columns
                Validator-->>UI: Show error "Kolom tidak lengkap"
                UI-->>User: Display error alert
            else All columns present
                Validator->>Storage: Store processed data
                Storage-->>Validator: Confirm storage
                Validator-->>UI: Show success message
                UI-->>User: Display success alert
                UI->>UV: Update dataset info cards
                UV-->>User: Show updated dataset stats
            end
        end
    end
```

---

## 6. Sequence Diagram - Policy Recommendation View

```mermaid
sequenceDiagram
    actor User
    participant PV as PolicyView
    participant PR as PolicyRecommendations
    participant Accordion as Accordion Component
    participant PDF as PDF Generator

    User->>PV: Navigate to Policy page
    PV->>PV: Load cluster summary data
    PV-->>User: Display 3 cluster summary cards

    PV->>PR: Render PolicyRecommendations
    PR->>Accordion: Initialize accordion items
    Accordion-->>User: Display collapsed accordion

    User->>Accordion: Click "Klaster 1: Wilayah Investasi Tinggi"
    Accordion->>Accordion: Expand cluster 1 content
    Accordion-->>User: Show priorities:<br/>- Diversifikasi Industri<br/>- Desentralisasi Investasi<br/>- Hub Inovasi

    User->>Accordion: Click priority "Diversifikasi Industri"
    Accordion-->>User: Show action items:<br/>- Insentif industri teknologi<br/>- Zona ekonomi khusus<br/>- Kemitraan riset global

    User->>PV: Click "Unduh PDF Lengkap"
    PV->>PDF: Generate report
    PDF->>PDF: Compile all clusters
    PDF->>PDF: Add recommendations
    PDF->>PDF: Format as PDF
    PDF-->>User: Download policy_report.pdf
```

---

## 7. Sequence Diagram - User Logout

```mermaid
sequenceDiagram
    actor User
    participant TN as TopNav
    participant DD as DropdownMenu
    participant DL as DashboardLayout
    participant Router as Next.js Router
    participant LP as LandingPage

    User->>TN: Click user avatar
    TN->>DD: Open dropdown menu
    DD-->>User: Display menu options

    User->>DD: Click "Keluar"
    DD->>DL: Trigger onLogout callback
    DL->>DL: Clear session state
    DL->>Router: router.push("/")
    Router->>LP: Render LandingPage
    LP-->>User: Display landing page
    
    Note over User,LP: User session ended
```

---

## 8. Sequence Diagram - Chart Visualization

```mermaid
sequenceDiagram
    actor User
    participant VV as VisualizationView
    participant Tabs as Tabs Component
    participant Charts as Recharts
    participant Data as Static Data

    User->>VV: Navigate to Visualization page
    VV->>Data: Load all chart data
    Data-->>VV: Return investment, distribution, scatter, trend data
    VV->>Tabs: Initialize with default tab "investment"
    Tabs->>Charts: Render BarChart
    Charts-->>User: Display investment by cluster chart

    User->>Tabs: Click "Distribusi Provinsi"
    Tabs->>Charts: Render PieChart
    Charts-->>User: Display province distribution pie chart

    User->>Tabs: Click "Scatter Plot"
    Tabs->>Charts: Render ScatterChart
    Charts-->>User: Display PDRB vs IPM scatter plot

    User->>Charts: Hover over data point
    Charts->>Charts: Calculate tooltip position
    Charts-->>User: Display tooltip with data values

    User->>Tabs: Click "Tren Temporal"
    Tabs->>Charts: Render grouped BarChart
    Charts-->>User: Display 2019-2024 trend chart
```
