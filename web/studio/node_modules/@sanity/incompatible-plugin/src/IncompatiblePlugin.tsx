import React, {useCallback, useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {ClipboardIcon, CheckmarkIcon} from '@sanity/icons'

export interface PluginDef {
  name: string
  versions: {
    v3: string
    v2?: string
  }
  sanityExchangeUrl?: string
}

export interface IncompatiblePluginsProps {
  plugins: PluginDef[]
}

export function IncompatiblePlugins(props: IncompatiblePluginsProps) {
  const {plugins} = props

  const pluginsWithLinks = plugins.filter((p) => !!p.sanityExchangeUrl)
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
        fontFamily: 'arial',
        width: '100%',
        height: '100%',
      }}
    >
      <div style={{maxWidth: 800, padding: 20, margin: 'auto', border: '1px solid grey'}}>
        <h2 style={{margin: 0, marginBottom: 5, fontSize: '1.2em'}}>
          Incompatible plugin{plugins.length > 1 ? 's' : ''}
        </h2>
        <div>
          The following
          {plugins.length > 1 ? ' plugins are ' : ' plugin is '} incompatible with this Sanity
          Studio v2:
        </div>

        <div style={{marginTop: '10px'}}>
          {plugins.map((p) => (
            <div key={p.name} style={{marginBottom: '10px'}}>
              <div style={{marginRight: '10px'}}>
                <strong>
                  <span style={{color: '#C3362C'}}>{p.name}</span>
                </strong>
              </div>
              <div>
                Version: <span style={{color: '#C3362C'}}>{p.versions.v3}</span>
              </div>
            </div>
          ))}
        </div>

        <div>
          {plugins.length > 1 ? 'These are' : 'It is'} built for{' '}
          <a href="https://www.sanity.io/studio-v3">Sanity Studio v3</a>.
        </div>

        <div>
          <h2 style={{margin: 0, marginBottom: 5, marginTop: 20, fontSize: '1.2em'}}>
            Resolve the issue
          </h2>

          <DowngradablePlugins plugins={plugins} />
          <span style={{margin: 10}}>
            <RemovePlugins plugins={plugins} />
          </span>

          <div>... and then restart the Studio.</div>

          <div>
            <h2 style={{margin: 0, marginBottom: 5, marginTop: 20, fontSize: '1.2em'}}>
              More information
            </h2>
            {pluginsWithLinks.length > 0 && (
              <div>
                {pluginsWithLinks.map((p) => (
                  <div key={p.name}>
                    {p.name} on <a href={p.sanityExchangeUrl}>Sanity Exchange</a>
                  </div>
                ))}
              </div>
            )}

            <div style={{marginTop: 20}}>
              <a href="https://beta.sanity.io/docs/platform/studio/v2-to-v3">
                About Sanity Studio versions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DowngradablePlugins(props: IncompatiblePluginsProps) {
  const plugins = props.plugins.filter((p) => !!p.versions.v2)

  if (!plugins.length) {
    return null
  }

  const yarnCommand = `yarn add ${plugins.map((p) => `${p.name}@${p.versions.v2}`).join(' ')}`

  return (
    <>
      <div style={{marginBottom: 10}}>
        Downgrade the plugin{plugins.length > 1 ? 's' : ''} by running this command in the Studio
        directory:
      </div>
      <Command command={yarnCommand} />
    </>
  )
}

function RemovePlugins(props: IncompatiblePluginsProps) {
  const plugins = props.plugins.filter((p) => !p.versions.v2)

  if (!plugins.length) {
    return null
  }

  const uninstallCommand = plugins.map((p) => `sanity uninstall ${p.name}`).join(' && ')

  return (
    <>
      <div style={{marginBottom: 10}}>
        Uninstall the plugin{plugins.length > 1 ? 's' : ''} by running this command in the Studio
        directory:
      </div>
      <Command command={uninstallCommand} />
    </>
  )
}

function Command({command}: {command: string}) {
  const [copied, handleCopy] = useCopy()

  return (
    <div
      style={{
        background: '#e1e3e5',
        padding: 20,
        border: '1px solid lightgrey',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <div
          style={{
            color: '#101112FF',
            overflowX: 'auto',
            height: '2.5em',
            fontFamily: 'monospace',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {command}
        </div>
      </div>
      <CopyToClipboard text={command} onCopy={handleCopy}>
        <div>
          <button
            type="button"
            style={{display: 'flex', alignItems: 'center', gap: 5, height: 35, width: 35}}
            title="Copy to clipboard"
          >
            {copied ? (
              <CheckmarkIcon width={25} height={25} />
            ) : (
              <ClipboardIcon width={25} height={25} />
            )}
          </button>
        </div>
      </CopyToClipboard>
    </div>
  )
}

function useCopy() {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    setCopied(true)
    const timeout = setTimeout(() => {
      setCopied(false)
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [setCopied])

  return [copied, handleCopy] as [typeof copied, typeof handleCopy]
}
