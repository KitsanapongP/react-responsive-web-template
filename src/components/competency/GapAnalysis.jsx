// src/components/competency/GapAnalysis.jsx
import React from 'react';
import { Info } from 'lucide-react';
import { useLanguage } from '../../providers/LanguageContext';

const GapAnalysis = ({
    competencies,
    scores,
    requirements
}) => {
    const { t } = useLanguage();

    return (
        <div className="gap-section card">
            <div className="card-header">
                <h2>
                    <Info size={20} className="section-icon" />
                    {t('gap_analysis')}
                </h2>
                <span className="info-badge">{t('compared_to_requirement')}</span>
            </div>
            <div className="gap-grid">
                {competencies.map(id => {
                    const score = scores[id.id] || 0;
                    const target = requirements[id.id];
                    const gap = score - target;
                    const Icon = id.icon;

                    return (
                        <div key={id.id} className="gap-item">
                            <div className="gap-header">
                                <div className="gap-icon" style={{ backgroundColor: `${id.color}15`, color: id.color }}>
                                    <Icon size={16} />
                                </div>
                                <span className="gap-name">{id.name}</span>
                                <span className={`gap-value ${gap >= 0 ? 'positive' : 'negative'}`}>
                                    {gap >= 0 ? '+' : ''}{gap}
                                </span>
                            </div>
                            <div className="gap-bar">
                                <div
                                    className="gap-fill"
                                    style={{
                                        width: `${Math.min(100, (score / target) * 100)}%`,
                                        backgroundColor: gap >= 0 ? '#10b981' : '#f97316'
                                    }}
                                ></div>
                            </div>
                            <div className="gap-labels">
                                <span>{t('score')}: {score}</span>
                                <span>{t('target')}: {target}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GapAnalysis;
