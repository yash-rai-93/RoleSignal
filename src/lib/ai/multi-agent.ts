/**
 * Multi-Agent Collaboration System
 *
 * Architecture:
 * User Request → Tools → Baseline → [Analysis Agent, Feedback Agent] → Validation → Output
 *
 * Agents:
 * - Analysis Agent: Data analysis, keyword optimization, and scoring
 * - Feedback Agent: Actionable recommendations and synthesis
 * - Both agents run in parallel (independent of each other)
 *
 * Implementation split into:
 * - multi-agent/utils.ts - Shared utilities (retry, timeout)
 * - multi-agent/resume-review.ts - Resume review logic
 * - multi-agent/job-match.ts - Job match logic
 */

export {
  multiAgentResumeReview,
  multiAgentJobMatch,
  runWithRetry,
  withTimeout,
} from "./multi-agent/index";
