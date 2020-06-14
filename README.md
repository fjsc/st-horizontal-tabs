<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [st-element-starter](#st-element-starter)
- [Classes](#classes)
  - [Class: StHorizontalTabs](#class-sthorizontaltabs)
    - [Hierarchy](#hierarchy)
    - [Index](#index)
    - [Properties](#properties)
    - [Methods](#methods)
- [Enums](#enums)
  - [Enumeration: StHorizontalTabStatus](#enumeration-sthorizontaltabstatus)
    - [Index](#index-1)
    - [Enumeration members](#enumeration-members)
- [st-element-starter](#st-element-starter-1)
  - [Index](#index-2)
    - [Namespaces](#namespaces)
    - [Enumerations](#enumerations)
    - [Classes](#classes-1)
    - [Interfaces](#interfaces)
- [Interfaces](#interfaces-1)
  - [Interface: HTMLElementTagNameMap](#interface-htmlelementtagnamemap)
    - [Hierarchy](#hierarchy-1)
    - [Index](#index-3)
    - [Properties](#properties-1)
  - [Interface: StHorizontalTab](#interface-sthorizontaltab)
    - [Hierarchy](#hierarchy-2)
    - [Index](#index-4)
    - [Properties](#properties-2)
  - [Interface: StHorizontalTabSchema](#interface-sthorizontaltabschema)
    - [Hierarchy](#hierarchy-3)
    - [Index](#index-5)
    - [Properties](#properties-3)
  - [Interface: TranslateableElement](#interface-translateableelement)
    - [Hierarchy](#hierarchy-4)
    - [Index](#index-6)
    - [Properties](#properties-4)
- [Modules](#modules)
  - [Namespace: __global](#namespace-__global)
    - [Index](#index-7)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

[st-element-starter](#globalsmd)

# st-element-starter


# Classes


<a name="classessthorizontaltabsmd"></a>

[st-element-starter](#globalsmd) › [StHorizontalTabs](#classessthorizontaltabsmd)

## Class: StHorizontalTabs

Documentation StHorizontalTabs

### Hierarchy

* LitElement

  ↳ **StHorizontalTabs**

### Index

#### Properties

* [activeOption](#activeoption)
* [options](#options)
* [qaTag](#qatag)

#### Methods

* [activateOption](#activateoption)
* [getTabClasses](#gettabclasses)
* [getTabElement](#gettabelement)
* [render](#render)

### Properties

####  activeOption

• **activeOption**: *[StHorizontalTab](#interfacessthorizontaltabmd)*

*Defined in [src/components/st-horizontal-tabs.ts:31](https://github.com/Stratio/st-horizontal-tabs/blob/4eb1546/src/components/st-horizontal-tabs.ts#L31)*

Current active option

___

####  options

• **options**: *[StHorizontalTab](#interfacessthorizontaltabmd)[]* = []

*Defined in [src/components/st-horizontal-tabs.ts:37](https://github.com/Stratio/st-horizontal-tabs/blob/4eb1546/src/components/st-horizontal-tabs.ts#L37)*

An array of StHorizontalTab objects (see below) that defines the links
that will appear and that will be disabled

___

####  qaTag

• **qaTag**: *string*

*Defined in [src/components/st-horizontal-tabs.ts:41](https://github.com/Stratio/st-horizontal-tabs/blob/4eb1546/src/components/st-horizontal-tabs.ts#L41)*

Prefix used to generate the id values for qa tests

### Methods

####  activateOption

▸ **activateOption**(`option`: [StHorizontalTab](#interfacessthorizontaltabmd)): *void*

*Defined in [src/components/st-horizontal-tabs.ts:69](https://github.com/Stratio/st-horizontal-tabs/blob/4eb1546/src/components/st-horizontal-tabs.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`option` | [StHorizontalTab](#interfacessthorizontaltabmd) |

**Returns:** *void*

___

####  getTabClasses

▸ **getTabClasses**(`tab`: [StHorizontalTab](#interfacessthorizontaltabmd)): *string*

*Defined in [src/components/st-horizontal-tabs.ts:76](https://github.com/Stratio/st-horizontal-tabs/blob/4eb1546/src/components/st-horizontal-tabs.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`tab` | [StHorizontalTab](#interfacessthorizontaltabmd) |

**Returns:** *string*

___

####  getTabElement

▸ **getTabElement**(`option`: [StHorizontalTab](#interfacessthorizontaltabmd), `index`: number): *TemplateResult*

*Defined in [src/components/st-horizontal-tabs.ts:60](https://github.com/Stratio/st-horizontal-tabs/blob/4eb1546/src/components/st-horizontal-tabs.ts#L60)*

Returns single tab

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`option` | [StHorizontalTab](#interfacessthorizontaltabmd) | - |
`index` | number |   |

**Returns:** *TemplateResult*

___

####  render

▸ **render**(): *TemplateResult*

*Overrides void*

*Defined in [src/components/st-horizontal-tabs.ts:43](https://github.com/Stratio/st-horizontal-tabs/blob/4eb1546/src/components/st-horizontal-tabs.ts#L43)*

**Returns:** *TemplateResult*

# Enums


<a name="enumssthorizontaltabstatusmd"></a>

[st-element-starter](#globalsmd) › [StHorizontalTabStatus](#enumssthorizontaltabstatusmd)

## Enumeration: StHorizontalTabStatus

### Index

#### Enumeration members

* [error](#error)
* [warning](#warning)

### Enumeration members

####  error

• **error**: = "error"

*Defined in [src/models/st-horizontal-tabs.model.ts:12](https://github.com/Stratio/st-horizontal-tabs/blob/4eb1546/src/models/st-horizontal-tabs.model.ts#L12)*

___

####  warning

• **warning**: = "warning"

*Defined in [src/models/st-horizontal-tabs.model.ts:12](https://github.com/Stratio/st-horizontal-tabs/blob/4eb1546/src/models/st-horizontal-tabs.model.ts#L12)*


<a name="globalsmd"></a>

[st-element-starter](#globalsmd)

# st-element-starter

## Index

### Namespaces

* [__global](#modules__globalmd)

### Enumerations

* [StHorizontalTabStatus](#enumssthorizontaltabstatusmd)

### Classes

* [StHorizontalTabs](#classessthorizontaltabsmd)

### Interfaces

* [StHorizontalTab](#interfacessthorizontaltabmd)
* [StHorizontalTabSchema](#interfacessthorizontaltabschemamd)
* [TranslateableElement](#interfacestranslateableelementmd)

# Interfaces


<a name="interfaces__globalhtmlelementtagnamemapmd"></a>

[st-element-starter](#globalsmd) › [__global](#modules__globalmd) › [HTMLElementTagNameMap](#interfaces__globalhtmlelementtagnamemapmd)

## Interface: HTMLElementTagNameMap

### Hierarchy

* **HTMLElementTagNameMap**

### Index

#### Properties

* [st-horizontal-tabs](#st-horizontal-tabs)

### Properties

####  st-horizontal-tabs

• **st-horizontal-tabs**: *[StHorizontalTabs](#classessthorizontaltabsmd)*

*Defined in [src/components/st-horizontal-tabs.ts:92](https://github.com/Stratio/st-horizontal-tabs/blob/4eb1546/src/components/st-horizontal-tabs.ts#L92)*


<a name="interfacessthorizontaltabmd"></a>

[st-element-starter](#globalsmd) › [StHorizontalTab](#interfacessthorizontaltabmd)

## Interface: StHorizontalTab

### Hierarchy

* **StHorizontalTab**

### Index

#### Properties

* [id](#id)
* [status](#optional-status)
* [text](#text)

### Properties

####  id

• **id**: *string*

*Defined in [src/models/st-horizontal-tabs.model.ts:15](https://github.com/Stratio/st-horizontal-tabs/blob/4eb1546/src/models/st-horizontal-tabs.model.ts#L15)*

___

#### `Optional` status

• **status**? : *[StHorizontalTabStatus](#enumssthorizontaltabstatusmd)*

*Defined in [src/models/st-horizontal-tabs.model.ts:17](https://github.com/Stratio/st-horizontal-tabs/blob/4eb1546/src/models/st-horizontal-tabs.model.ts#L17)*

___

####  text

• **text**: *string*

*Defined in [src/models/st-horizontal-tabs.model.ts:16](https://github.com/Stratio/st-horizontal-tabs/blob/4eb1546/src/models/st-horizontal-tabs.model.ts#L16)*


<a name="interfacessthorizontaltabschemamd"></a>

[st-element-starter](#globalsmd) › [StHorizontalTabSchema](#interfacessthorizontaltabschemamd)

## Interface: StHorizontalTabSchema

### Hierarchy

* **StHorizontalTabSchema**

### Index

#### Properties

* [id](#id)
* [text](#text)

### Properties

####  id

• **id**: *string*

*Defined in [src/models/st-horizontal-tabs.model.ts:21](https://github.com/Stratio/st-horizontal-tabs/blob/4eb1546/src/models/st-horizontal-tabs.model.ts#L21)*

___

####  text

• **text**: *[TranslateableElement](#interfacestranslateableelementmd)*

*Defined in [src/models/st-horizontal-tabs.model.ts:22](https://github.com/Stratio/st-horizontal-tabs/blob/4eb1546/src/models/st-horizontal-tabs.model.ts#L22)*


<a name="interfacestranslateableelementmd"></a>

[st-element-starter](#globalsmd) › [TranslateableElement](#interfacestranslateableelementmd)

## Interface: TranslateableElement

### Hierarchy

* **TranslateableElement**

### Index

#### Properties

* [key](#key)
* [translate](#translate)

### Properties

####  key

• **key**: *string*

*Defined in [src/models/st-horizontal-tabs.model.ts:26](https://github.com/Stratio/st-horizontal-tabs/blob/4eb1546/src/models/st-horizontal-tabs.model.ts#L26)*

___

####  translate

• **translate**: *boolean*

*Defined in [src/models/st-horizontal-tabs.model.ts:27](https://github.com/Stratio/st-horizontal-tabs/blob/4eb1546/src/models/st-horizontal-tabs.model.ts#L27)*

# Modules


<a name="modules__globalmd"></a>

[st-element-starter](#globalsmd) › [__global](#modules__globalmd)

## Namespace: __global

### Index

#### Interfaces

* [HTMLElementTagNameMap](#interfaces__globalhtmlelementtagnamemapmd)
