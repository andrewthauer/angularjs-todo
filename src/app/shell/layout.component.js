export const LayoutComponentName = 'appLayout'

export const LayoutComponent = {
  template: `
    <header>
    </header>
    <main>
      <ng-transclude></ng-transclude>
    </main>
    <footer>
    </footer>
  `,
  transclude: true,
}

export default LayoutComponent
