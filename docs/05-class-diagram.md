# Class Diagram - INVESTRA
## Investment Analytics Indonesia Dashboard

---

## 1. Class Diagram - Main Components

```mermaid
classDiagram
    class LandingPage {
        -newsItems: NewsItem[]
        +render(): JSX.Element
    }
    
    class LoginView {
        -username: string
        -password: string
        -showPassword: boolean
        -error: string
        -isLoading: boolean
        +handleSubmit(e: FormEvent): void
        +setUsername(value: string): void
        +setPassword(value: string): void
        +setShowPassword(value: boolean): void
        +render(): JSX.Element
    }
    
    class DashboardLayout {
        +children: ReactNode
        -router: NextRouter
        -pathname: string
        +handleLogout(): void
        +getActiveView(): string
        +handleViewChange(view: string): void
        +render(): JSX.Element
    }
    
    class TopNav {
        +onLogout: Function
        +render(): JSX.Element
    }
    
    class Sidebar {
        +activeView: string
        +setActiveView: Function
        -menuItems: MenuItem[]
        +render(): JSX.Element
    }
    
    class Footer {
        +render(): JSX.Element
    }

    DashboardLayout --> TopNav : contains
    DashboardLayout --> Sidebar : contains
    DashboardLayout --> Footer : contains
```

---

## 2. Class Diagram - View Components

```mermaid
classDiagram
    class DashboardView {
        -summaryCards: SummaryCard[]
        -policyInsights: PolicyInsight[]
        +render(): JSX.Element
    }
    
    class UploadDataView {
        -uploadStatus: UploadStatus
        +setUploadStatus(status): void
        +render(): JSX.Element
    }
    
    class PCAAnalysisView {
        -pcaSummary: PCASummary[]
        +render(): JSX.Element
    }
    
    class ClusteringView {
        -clusters: Cluster[]
        +render(): JSX.Element
    }
    
    class VisualizationView {
        -investmentByCluster: ChartData[]
        -provincesDistribution: ChartData[]
        -scatterData: ScatterData[]
        -trendData: TrendData[]
        +render(): JSX.Element
    }
    
    class PolicyView {
        -clusterSummary: ClusterSummary[]
        +render(): JSX.Element
    }
    
    class AboutView {
        +render(): JSX.Element
    }

    DashboardView --> InteractiveMap : uses
    DashboardView --> PCAChart : uses
    PCAAnalysisView --> PCAChart : uses
    VisualizationView --> InteractiveMap : uses
    PolicyView --> PolicyRecommendations : uses
```

---

## 3. Class Diagram - Chart Components

```mermaid
classDiagram
    class InteractiveMap {
        -zoom: number
        -hoveredProvince: Province | null
        -provinces: Province[]
        -clusterColors: Record~number, string~
        -clusterLabels: Record~number, string~
        +setZoom(value: number): void
        +setHoveredProvince(p: Province): void
        +render(): JSX.Element
    }
    
    class PCAChart {
        -pcaData: PCAData[]
        -factorLoadings: FactorLoading[]
        +render(): JSX.Element
    }
    
    class PolicyRecommendations {
        -recommendations: Recommendation[]
        +render(): JSX.Element
    }
    
    class GarudaEmblem {
        +size: number
        +render(): JSX.Element
    }
    
    class ImageWithFallback {
        +src: string
        +alt: string
        +className: string
        -imgSrc: string
        -hasError: boolean
        +render(): JSX.Element
    }
```

---

## 4. Class Diagram - Data Models

```mermaid
classDiagram
    class Province {
        +name: string
        +cluster: number
        +x: number
        +y: number
        +size: number
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
        +avgInvestment: number
        +provinces: string[]
        +characteristics: string[]
    }
    
    class PCAData {
        +component: string
        +economic: number
        +infrastructure: number
        +human: number
        +variance: number
    }
    
    class FactorLoading {
        +factor: string
        +loading: number
    }
    
    class MenuItem {
        +id: string
        +label: string
        +icon: LucideIcon
        +description: string
    }
    
    class SummaryCard {
        +title: string
        +value: string
        +icon: LucideIcon
        +color: string
    }
    
    class NewsItem {
        +category: string
        +title: string
        +image: string
        +time: string
    }
    
    class Recommendation {
        +cluster: number
        +title: string
        +subtitle: string
        +color: string
        +icon: LucideIcon
        +priorities: Priority[]
    }
    
    class Priority {
        +title: string
        +description: string
        +icon: LucideIcon
        +actions: string[]
    }

    Cluster "1" --> "*" Province : contains
    Recommendation "1" --> "*" Priority : has
```

---

## 5. Class Diagram - UI Components

```mermaid
classDiagram
    class Button {
        +variant: ButtonVariant
        +size: ButtonSize
        +asChild: boolean
        +className: string
        +onClick: Function
        +render(): JSX.Element
    }
    
    class Card {
        +className: string
        +children: ReactNode
        +render(): JSX.Element
    }
    
    class CardHeader {
        +className: string
        +children: ReactNode
    }
    
    class CardTitle {
        +className: string
        +children: ReactNode
    }
    
    class CardDescription {
        +className: string
        +children: ReactNode
    }
    
    class CardContent {
        +className: string
        +children: ReactNode
    }
    
    class Input {
        +type: string
        +placeholder: string
        +value: string
        +onChange: Function
        +className: string
    }
    
    class Label {
        +htmlFor: string
        +className: string
        +children: ReactNode
    }
    
    class Badge {
        +variant: BadgeVariant
        +className: string
        +children: ReactNode
    }
    
    class Avatar {
        +className: string
        +children: ReactNode
    }
    
    class Tabs {
        +defaultValue: string
        +className: string
        +children: ReactNode
    }
    
    class Accordion {
        +type: AccordionType
        +collapsible: boolean
        +className: string
    }

    Card --> CardHeader
    Card --> CardContent
    CardHeader --> CardTitle
    CardHeader --> CardDescription
```

---

## 6. Complete Class Diagram - System Overview

```mermaid
classDiagram
    %% Page Components
    class LandingPage
    class LoginView
    class DashboardLayout
    class DashboardView
    class UploadDataView
    class PCAAnalysisView
    class ClusteringView
    class VisualizationView
    class PolicyView
    class AboutView
    
    %% Layout Components
    class TopNav
    class Sidebar
    class Footer
    
    %% Chart Components
    class InteractiveMap
    class PCAChart
    class PolicyRecommendations
    
    %% Data Models
    class Province
    class Cluster
    class PCAData
    
    %% Relationships
    DashboardLayout --> TopNav
    DashboardLayout --> Sidebar
    DashboardLayout --> Footer
    
    DashboardLayout --> DashboardView
    DashboardLayout --> UploadDataView
    DashboardLayout --> PCAAnalysisView
    DashboardLayout --> ClusteringView
    DashboardLayout --> VisualizationView
    DashboardLayout --> PolicyView
    DashboardLayout --> AboutView
    
    DashboardView --> InteractiveMap
    DashboardView --> PCAChart
    VisualizationView --> InteractiveMap
    PCAAnalysisView --> PCAChart
    PolicyView --> PolicyRecommendations
    
    InteractiveMap --> Province
    ClusteringView --> Cluster
    PCAChart --> PCAData
    PolicyRecommendations --> Cluster
```

---

## 7. Enum & Type Definitions

```mermaid
classDiagram
    class ButtonVariant {
        <<enumeration>>
        default
        destructive
        outline
        secondary
        ghost
        link
    }
    
    class ButtonSize {
        <<enumeration>>
        default
        sm
        lg
        icon
    }
    
    class BadgeVariant {
        <<enumeration>>
        default
        secondary
        destructive
        outline
    }
    
    class UploadStatus {
        <<enumeration>>
        idle
        success
        error
    }
    
    class ViewType {
        <<enumeration>>
        dashboard
        upload
        pca
        clustering
        visualization
        policy
        about
    }
```
