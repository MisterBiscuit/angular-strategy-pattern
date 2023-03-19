# Angular Strategy Pattern

Proof of concept of the strategy design pattern in Angular.

I used the [Refactoring Guru website](https://refactoring.guru/design-patterns/strategy) as a guideline to implement this example (including the results from different web searches). \
Note: I'm not affiliated or sponsored in any way, I just like the website and their explanations.

## Main idea

You have a main component that allows the user to choose a behaviour, a way of entering information, and a button that does something with the entered information, regardless of the chosen behaviour. \
Instead of having the main component (`StrategySelectorComponent`) handle the logic of each case along with conditions in the component and in the template, it would be cleaner and more maintainable to split the different behaviours into `FirstStrategyComponent`, `SecondStrategyComponent`, and `ThirdStrategyComponent` classes.

## How this works

The `StrategySelectorComponent` functions as the Context, it knows which Concrete Strategy is active. \
In this implementation it also contains a list of known strategies which are created on initialisation and used to provide the list of available strategies to the template.

Each Concrete Strategy contains it's own specific logic and doesn't know how the other Concrete Strategies work. \
When the user selects a different strategy in the interface, the active Strategy is changed to the newly selected one.

When the user clicks the `Trigger value event` button, the active Strategy's `getFormData()` method is called and the result is emitted in the `valueUpdated()` EventEmitter, allowing whatever parent component to subscribe to the event and get the values entered by the user.

## Behaviour specific to this implementation

The template has a container into which the active Strategy's component will be injected. \
When the Strategy is changed, the old Strategy's component is detached, not destroyed, which means that if the user enters information into the first Strategy, then moves to another Strategy, then back to the first Strategy, the previously entered information is still there.

The `Trigger value event` will only provide the data from the active Strategy, even if the user had entered information in one of the other Strategies.

## Trying this out

Very basic procedure here: clone the repository, install the dependencies, run `ng serve --open`.
