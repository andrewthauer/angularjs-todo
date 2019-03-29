import template from './card.component.html'
import './card.component.scss'

export const CardComponentName = 'appCard'

class CardComponentController {}

export const CardComponent = {
  controller: CardComponentController,
  template,
  bindings: {},
  transclude: true,
}

export default CardComponent
