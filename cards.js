const featuredProjects = [
  {
    title: "Master Thesis",
    description:
      "Procedural music generation work, examples, generated audio, scores, and technical documentation from the thesis project.",
    tags: ["Research", "Music", "Python", "Procedural Generation"],
    href: "https://lima98.github.io/TTK4900",
    secondaryHref: "https://github.com/lima98/TTK4900",
    secondaryLabel: "See repo",
    color: "#1f8a70"
  },
  {
    title: "Dotfiles",
    description:
      "Personal shell, editor, terminal, and system configuration for keeping the development environment sharp and portable.",
    tags: ["Setup", "CLI", "Config"],
    href: "https://github.com/lima98/dotfiles",
    color: "#315a8c"
  },
  {
    title: "All Repositories",
    description:
      "The complete GitHub repository list for Lima98, including experiments and work that may later graduate to this page.",
    tags: ["GitHub", "Archive"],
    href: "https://github.com/lima98?tab=repositories",
    color: "#6f5f90"
  }
];

const profileLinks = [
  {
    title: "GitHub Profile",
    description: "Main code profile, repositories, contributions, and project history.",
    href: "https://github.com/lima98",
    label: "Open GitHub"
  },
  {
    title: "Lichess",
    description: "Chess profile for Lima98 on Lichess.",
    href: "https://lichess.org/@/Lima98",
    label: "Open Lichess"
  }
];

function renderTags(tags) {
  return tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function renderProjects(projects) {
  const container = document.querySelector("#featured-projects");

  container.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card" style="--card-color: ${project.color}">
          <div class="card-meta">${renderTags(project.tags)}</div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="card-actions">
            <a class="button primary" href="${project.href}">Open project</a>
            ${
              project.secondaryHref
                ? `<a class="button secondary" href="${project.secondaryHref}">${project.secondaryLabel}</a>`
                : ""
            }
          </div>
        </article>
      `
    )
    .join("");
}

function renderProfileLinks(links) {
  const container = document.querySelector("#profile-links");

  container.innerHTML = links
    .map(
      (link) => `
        <article class="link-card">
          <h3>${link.title}</h3>
          <p>${link.description}</p>
          <a class="button secondary" href="${link.href}">${link.label}</a>
        </article>
      `
    )
    .join("");
}

renderProjects(featuredProjects);
renderProfileLinks(profileLinks);
