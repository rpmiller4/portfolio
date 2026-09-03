import React from 'react';
import loomProjectImg from '../../images/loom-project-2-optimized.webp';
import digitalDrafterProjectImg from '../../images/digital-drafter-optimized.webp';
import ghostNoteProjectImg from '../../images/ghostnote-optimized.webp';

const projects = [
    {
        name: 'Loom',
        image: loomProjectImg,
        imageAlt: 'Abstract layers of source material converging into a focused retrieval path.',
        description:
            'Memory for AI work that has to survive more than one conversation.',
        challenge:
            'As an AI work archive grows, current guidance begins competing with every old decision, resolved question, and abandoned direction. Deleting that history loses evidence; retrieving all of it buries the present.',
        approach:
            'Loom keeps source evidence intact while allowing derived knowledge to become active, quiet, superseded, or specific to a focus. Its C#/.NET core and SQLite store apply the same lifecycle and retrieval rules through both CLI and MCP interfaces.',
        result:
            'An AI client can retrieve current decisions and unresolved work first, then trace any item back to its source when it needs more context.',
        technologies: ['C# and .NET', 'SQLite and full-text search', 'Model Context Protocol', 'CLI tooling']
    },
    {
        name: 'Digital Drafter',
        image: digitalDrafterProjectImg,
        imageAlt: 'Abstract software modules and repository paths coordinated through a central agent loop.',
        description:
            'A local coding-agent prototype for exploring how language models use software-development tools.',
        challenge:
            'A model could generate code, but useful repository work required a larger loop: inspect the existing project, choose an operation, observe the result, recover from failure, and continue until the change could be verified.',
        approach:
            'Digital Drafter connects OpenAI and Anthropic models to strongly typed JSON tools for files, Git repositories, project structure, .NET builds, command execution, and web retrieval. A bounded execution loop coordinates those operations and preserves their results between steps.',
        resultHeading: 'What it demonstrated',
        result:
            'The project produced a functioning version of the tool-using pattern now common in desktop coding agents. Its capabilities are modest by current standards, but building it made the orchestration, observability, failure handling, and cost-control problems concrete.',
        technologies: ['C# and .NET', 'OpenAI and Anthropic APIs', 'Typed tool orchestration', 'Git automation']
    },
    {
        name: 'GhostNote',
        image: ghostNoteProjectImg,
        imageAlt: 'Abstract documents, conversation threads, and audio records forming a searchable knowledge archive.',
        description:
            'A personal knowledge workspace where conversations, documents, logs, and voice notes become one continuing body of work.',
        challenge:
            'Personal knowledge arrives as conversations, documents, logs, and recordings, each trapped in a different timeline. The problem is not merely finding an item again, but preserving continuity between them.',
        approach:
            'GhostNote brings multi-model chat, documents, tags, chronological logs, archive browsing, Whisper transcription, and speech playback into one .NET and Blazor workspace. Routine classification stays local using feature hashing, TF-IDF, logistic regression, and serializable model snapshots.',
        result:
            'Using it over time exposed a harder problem: an archive can preserve everything and still fail to identify what is current. That discovery led directly to Loom.',
        technologies: ['.NET and Blazor', 'OpenAI Whisper', 'TF-IDF and logistic regression', 'Serializable model snapshots']
    }
];

const Showcase = () => {
    return (
        <section id="showcase">
            <div className="container">
                <div className="showcase-heading text-center">
                    <h1>Selected Projects</h1>
                    <p>
                        Three working systems I designed and built with AI-assisted development, from architecture
                        and implementation through testing and source control.
                    </p>
                </div>

                <div className="project-list">
                    {projects.map((project, index) => (
                        <article
                            className={`project-feature ${index % 2 === 1 ? 'project-feature-reverse' : ''}`}
                            key={project.name}
                        >
                            <div className="project-feature-media">
                                <img src={project.image} alt={project.imageAlt} />
                                <span className="project-number" aria-hidden="true">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            <div className="project-feature-content">
                                <h2>{project.name}</h2>
                                <p className="project-subtitle">{project.description}</p>

                                <div className="project-detail-grid">
                                    <div className="project-detail">
                                        <h3>The challenge</h3>
                                        <p>{project.challenge}</p>
                                    </div>

                                    <div className="project-detail">
                                        <h3>How it works</h3>
                                        <p>{project.approach}</p>
                                    </div>
                                </div>

                                <div className="project-result">
                                    <h3>{project.resultHeading || 'In practice'}</h3>
                                    <p>{project.result}</p>
                                </div>

                                <h3 className="project-technologies-heading">Technologies</h3>
                                <ul className="project-technologies" aria-label={`${project.name} technologies`}>
                                    {project.technologies.map((technology) => (
                                        <li key={technology}>{technology}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcase;
