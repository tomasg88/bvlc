import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import {IncompatiblePlugins, PluginDef} from './IncompatiblePlugin'

const incompatiblePlugins: PluginDef[] = []

const debounceRenderIncompatiblePlugins = debounce(renderIncompatiblePlugins)

export function showIncompatiblePluginDialog(plugin: PluginDef) {
  incompatiblePlugins.push(plugin)
  debounceRenderIncompatiblePlugins()

  // render an empty background
  return () => null
}

function renderIncompatiblePlugins() {
  if (!incompatiblePlugins.length) {
    return
  }
  requestAnimationFrame(() => {
    const id = 'v2-incompatible-plugins-dialog'
    const existingContainer = document.querySelector(`#${id}`)
    if (existingContainer) {
      // hotreload
      unmountComponentAtNode(existingContainer)
      existingContainer.remove()
    }

    const container = document.createElement('div')
    container.setAttribute('id', id)
    document.body.appendChild(container)

    render(<IncompatiblePlugins plugins={incompatiblePlugins} />, container)
  })
}

function debounce(func: () => void, timeout = 300) {
  let timer = 0
  return () => {
    window.clearTimeout(timer)
    timer = window.setTimeout(() => func(), timeout)
  }
}
