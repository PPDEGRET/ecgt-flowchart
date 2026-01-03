import { X, ExternalLink, Users, Calendar, FileText, AlertTriangle, CheckCircle } from 'lucide-react'
import { ecgtData } from '../data/ecgtData'

export default function DetailPanel({ node, onClose }) {
  if (!node) return null

  const nodeData = ecgtData[node.id] || {}
  const {
    title = node.data?.label || 'Unknown',
    description = 'No description available.',
    concernedParties = [],
    level = 'EU',
    articleRef = '',
    recitalRef = '',
    examples = [],
    keyDates = [],
    relatedRegulations = [],
    type = 'info'
  } = nodeData

  const typeColors = {
    'directive': 'bg-ecgt-primary',
    'ucpd': 'bg-ecgt-ucpd',
    'crd': 'bg-ecgt-crd',
    'blacklist': 'bg-ecgt-blacklist',
    'definition': 'bg-ecgt-info',
    'info': 'bg-ecgt-secondary'
  }

  return (
    <div className="fixed right-0 top-16 h-[calc(100vh-64px)] w-96 bg-white shadow-xl border-l border-gray-200 overflow-y-auto z-50">
      <div className={`${typeColors[type] || typeColors.info} text-white p-4`}>
        <div className="flex justify-between items-start">
          <div className="flex-1 pr-4">
            <p className="text-xs uppercase tracking-wide opacity-80 mb-1">
              {type === 'blacklist' ? 'Prohibited Practice' : type.toUpperCase()}
            </p>
            <h2 className="text-lg font-semibold leading-tight">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-5">
        <div>
          <p className="text-ecgt-text text-sm leading-relaxed">{description}</p>
        </div>

        {concernedParties.length > 0 && (
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-ecgt-text mb-2">
              <Users size={16} className="text-ecgt-accent" />
              Who is concerned?
            </h3>
            <div className="flex flex-wrap gap-2">
              {concernedParties.map((party, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-ecgt-bg text-ecgt-text text-xs rounded-full border border-gray-200"
                >
                  {party}
                </span>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-ecgt-text mb-2">
            <FileText size={16} className="text-ecgt-accent" />
            Regulatory Level
          </h3>
          <p className="text-sm text-ecgt-muted">
            {level === 'EU' 
              ? 'EU Directive \u2013 requires transposition into national law by each Member State' 
              : level}
          </p>
        </div>

        {(articleRef || recitalRef) && (
          <div>
            <h3 className="text-sm font-semibold text-ecgt-text mb-2">Legal References</h3>
            <div className="space-y-1 text-sm">
              {articleRef && (
                <p className="text-ecgt-muted">
                  <span className="font-medium text-ecgt-text">Article:</span> {articleRef}
                </p>
              )}
              {recitalRef && (
                <p className="text-ecgt-muted">
                  <span className="font-medium text-ecgt-text">Recital:</span> {recitalRef}
                </p>
              )}
            </div>
          </div>
        )}

        {examples.length > 0 && (
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-ecgt-text mb-2">
              {type === 'blacklist' ? (
                <AlertTriangle size={16} className="text-ecgt-blacklist" />
              ) : (
                <CheckCircle size={16} className="text-ecgt-info" />
              )}
              {type === 'blacklist' ? 'Prohibited Examples' : 'Examples'}
            </h3>
            <ul className="space-y-2">
              {examples.map((example, i) => (
                <li key={i} className="text-sm text-ecgt-muted flex gap-2">
                  <span className="text-ecgt-accent">\u2022</span>
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {keyDates.length > 0 && (
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-ecgt-text mb-2">
              <Calendar size={16} className="text-ecgt-accent" />
              Key Dates
            </h3>
            <div className="space-y-2">
              {keyDates.map((date, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-ecgt-muted">{date.label}</span>
                  <span className="font-medium text-ecgt-text">{date.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {relatedRegulations.length > 0 && (
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-ecgt-text mb-2">
              <ExternalLink size={16} className="text-ecgt-accent" />
              Related EU Regulations
            </h3>
            <ul className="space-y-1">
              {relatedRegulations.map((reg, i) => (
                <li key={i} className="text-sm text-ecgt-ucpd hover:underline cursor-pointer">
                  {reg}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <a
          href="http://data.europa.eu/eli/dir/2024/825/oj"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-sm text-ecgt-ucpd hover:underline"
        >
          <ExternalLink size={14} />
          View full directive on EUR-Lex
        </a>
      </div>
    </div>
  )
}