# Module-01

<details>
  <summary>Заняття 1</summary>
<ul>
    <li>Структура Next.js проєкту</li>
    <li>Маршрутизація у вебзастосунках</li>
    <li>Створення сторінок</li>
    <ul>
        <li>Home Page</li>
        <li>Notes Page</li>
        <li>About Page</li>
        <li>Profile Page</li>
    </ul>
    <li>Layout</li>
    <ul>
        <li>header, children, footer</li>
    </ul>
    <li>Components</li>
    <li>Link</li>
</ul>
</details>

<details>
  <summary>Заняття 2</summary>
<ul>
    <li>axios api</li>
    <ul>
        <li>https://next-docs-api.onrender.com</li>
        <li>lib/api.ts</li>
        <li>SSR</li>
    </ul>
    <li>'use client'</li>
    <ul>
        <li>CSR</li>
    </ul>
    <li>error & loading</li>
    <li>ISR & SSG</li>
    <ul>
        <li>revalidate</li>
    </ul>
    <li>Dynamic routes</li>
    <li>Global error & loading</li>
    <li>Dynamic client component</li>
    <li>React Query</li>
    <ul>
        <li>@tanstack/react-query</li>
        <li>TanStackProvider</li>
        <li>prefetchQuery</li>
        <li>HydrationBoundary</li>
        <li>useParams</li>
        <li>useQuery</li>
        <li>refetchOnMount</li>
    </ul>
</ul>
</details>

<br/>
<br/>

# Module-02

<details>
  <summary>Заняття 1</summary>
<ul>
    <li>Nested routes</li>
    <li>Not-found route</li>
    <li>Catch-all routes</li>
    <ul>
        <li>filter by categoryId</li>
        <li>filter by name</li>
    </ul>
    <li>useRouter</li>
</ul>
</details>

<details>
  <summary>Заняття 2</summary>
<ul>
    <li>Grouped routes</li>
    <li>Parallel routes</li>
    <ul>
        <li>@sidebar</li>
        <li>default.tsx</li>
    </ul>
    <li>Interception route</li>
    <ul>
        <li>@modal</li>
        <li>empty default</li>
        <li>modal in RootLayout</li>
        <li>close modal with router.back</li>
    </ul>
    <li>Redirect</li>
</ul>
</details>

<br/>
<br/>

# Module-03

<details>
  <summary>Заняття 1</summary>
<ul>
    <li>metadata</li>
    <li>async generateMetadata</li>
    <li>Open Graph & Twitter</li>
    <li>next/image</li>
    <ul>
        <li>width і height</li>
        <li>next.config.ts</li>
    </ul>
    <li>next/font</li>
    <li>Performance</li>
    <ul>
        <li>Cache-Control</li>
        <li>next.config.ts</li>
    </ul>
</ul>
</details>

<details>
  <summary>Заняття 2</summary>
<ul>
    <li>create note</li>
    <ul>
        <li>page</li>
        <li>sidebar</li>
        <li>form</li>
        <li>api</li>
    </ul>
    <li>zustand</li>
    <ul>
        <li>store</li>
        <li>draft</li>
        <li>initialDraft</li>
        <li>persist</li>
    </ul>
</ul>
</details>

<br/>
<br/>

# Module-04

<details>
  <summary>Заняття 1</summary>
<ul>
    <li>Next Server</li>
    <li>Route Handler</li>
    <ul>
        <li>instance axios</li>
        <li>create all Handlers</li>
        <li>update all requests</li>
    </ul>
    <li>Auth</li>
    <ul>
        <li>instance axios</li>
        <li>withCredentials</li>
    </ul>
    <li>sign-up</li>
    <ul>
        <li>Header Links</li>
        <li>sign-up/page</li>
        <li>POST register</li>
        <li>register Route Handler</li>
        <li>cookies in Route Handler</li>
        <ul>
            <li>npm i cookie</li>
            <li>get setCookie</li>
            <li>parse(cookieStr)</li>
            <li>create cookie options</li>
            <li>cookieStore.set</li>
        </ul>
        <li>add register(formValues) in form</li>
    </ul>
    <li>sign-in</li>
    <ul>
        <li>sign-up/page</li>
        <li>POST login</li>
        <li>login Route Handler</li>
        <li>cookies in Route Handler</li>
        <li>add login(formValues) in form</li>
    </ul>
    <li>AuthStore</li>
    <ul>
        <li>create store</li>
        <li>checkSession client</li>
        <li>checkSession Route Handler</li>
        <ul>
            <li>cookieStore.get</li>
            <li>checkSession client</li>
            <li>silent authentication in Route Handler</li>
        </ul>
        <li>GET getMe</li>
        <li>getMe Route Handler</li>
        <li>AuthProvider</li>
        <li>add AuthProvider in RootLayout</li>
        <li>create AuthNavigation</li>
        <li>POST logout</li>
        <li>logout Route Handler</li>
        <li>cookieStore.delete</li>
        <li>add in handleLogout</li>
        <li>add setUser in sign-in & sign-up pages</li>
    </ul>
    <li>pre-render error with getCategories</li>
</ul>
</details>
