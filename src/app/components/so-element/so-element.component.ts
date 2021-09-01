import angular from 'angular';

angular.module('soElementModule').component('soElement',{
  template: require('./so-element.pug'),
  controllerAs: 'vm',
  controller: class SoElementController {
      vm = this;
      soModel: any;
      soChange: any;

      onChange(evt) {
        this.soChange(evt);
      }

  },
  bindings: {
    soChange: '&',
  }
})
