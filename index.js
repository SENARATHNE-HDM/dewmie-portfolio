import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import SkillBadge from '../components/SkillBadge'
import ContactCard from '../components/ContactCard'

export default function Home(){
  return (
    <Layout>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">I am a final-year undergraduate transitioning from network engineering into DevOps.
        Currently learning Docker, GitHub Actions, Kubernetes, Terraform and AWS. I build small projects to learn practical
        DevOps skills and document them here.</p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex gap-2 flex-wrap">
          <SkillBadge name="Linux" />
          <SkillBadge name="Git & GitHub" />
          <SkillBadge name="Docker" />
          <SkillBadge name="GitHub Actions (Learning)" />
          <SkillBadge name="Kubernetes (Minikube)" />
          <SkillBadge name="AWS (Basic)" />
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard title="Docker + CI/CD" description="Containerize an app and create GitHub Actions pipeline. (Coming soon)" />
          <ProjectCard title="Kubernetes Deployment" description="Deploy on Minikube and demonstrate scaling & rollouts. (Coming soon)" />
          <ProjectCard title="Terraform + AWS" description="Provision a small VPC and EC2 instance via Terraform. (Coming soon)" />
        </div>
      </section>

      <section className="my-8">
        <ContactCard />
      </section>
    </Layout>
  )
}