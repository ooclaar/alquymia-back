/**
 * Custom Challenge Modal for Alquymia Theme
 * Loads challenge data from CTFd API and renders a custom modal
 */

(function() {
    'use strict';
    
    // Função para obter o token CSRF
    function getCSRFToken() {
        const tokenElement = document.querySelector('meta[name="csrf-token"]');
        return tokenElement ? tokenElement.content : '';
    }
    
    // Função para buscar dados do desafio via API
    async function fetchChallengeData(challengeId) {
        try {
            const response = await fetch(`/api/v1/challenges/${challengeId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            if (!response.ok) {
                throw new Error('Erro ao carregar desafio');
            }
            
            const result = await response.json();
            return result.data;
        } catch (error) {
            console.error('Erro ao buscar desafio:', error);
            return null;
        }
    }
    
    // Função para criar o HTML do modal customizado
    function createCustomModal(challenge) {
        // Determinar a cor do badge de categoria
        const categoryColors = {
            'Criptografia': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'Web': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'Forense': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'Esteganografia': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            'Reverse': 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            'MISC': 'linear-gradient(135deg, #ffd89b 0%, #19547b 100%)'
        };
        
        const categoryColor = categoryColors[challenge.category] || categoryColors['MISC'];
        
        // Determinar a cor do badge de dificuldade baseado nas tags
        let difficultyBadge = 'FÁCIL';
        let difficultyColor = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
        
        if (challenge.tags && challenge.tags.length > 0) {
            const tag = challenge.tags[0].toLowerCase();
            if (tag.includes('easy') || tag.includes('fácil') || tag.includes('facil')) {
                difficultyBadge = 'FÁCIL';
                difficultyColor = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
            } else if (tag.includes('medium') || tag.includes('médio') || tag.includes('medio')) {
                difficultyBadge = 'MÉDIO';
                difficultyColor = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
            } else if (tag.includes('hard') || tag.includes('difícil') || tag.includes('dificil')) {
                difficultyBadge = 'DIFÍCIL';
                difficultyColor = 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)';
            }
        }
        
        // Criar HTML dos arquivos
        let filesHTML = '';
        if (challenge.files && challenge.files.length > 0) {
            filesHTML = `
                <div style="margin-bottom: 2rem;">
                    <h5 style="color: #FF8C00; font-family: 'Orbitron', sans-serif; font-size: 1.2rem; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                        🔗 Link do Desafio
                    </h5>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        ${challenge.files.map(file => `
                            <a href="${file}" target="_blank" class="btn" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; font-weight: 600; transition: all 0.3s ease; border: none; max-width: 250px;">
                                🚀 Acessar Desafio
                            </a>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        // Criar HTML da connection info
        let connectionHTML = '';
        if (challenge.connection_info) {
            connectionHTML = `
                <div style="margin-bottom: 2rem;">
                    <h5 style="color: #FF8C00; font-family: 'Orbitron', sans-serif; font-size: 1.2rem; margin-bottom: 15px;">
                        🌐 Informações de Conexão
                    </h5>
                    <div style="background: rgba(0, 0, 0, 0.3); padding: 15px; border-radius: 8px; border-left: 4px solid #667eea;">
                        <code style="color: #e0e0e0; font-family: 'Courier New', monospace; font-size: 1rem;">
                            ${challenge.connection_info}
                        </code>
                    </div>
                </div>
            `;
        }
        
        const modalHTML = `
            <div class="modal fade" id="customChallengeModal" tabindex="-1" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                <div class="modal-dialog modal-dialog-centered" style="max-width: 900px !important;">
                    <div class="modal-content" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border: 2px solid #FF8C00; border-radius: 15px; box-shadow: 0 0 30px rgba(255, 140, 0, 0.3);">
                        
                        <!-- Modal Header -->
                        <div class="modal-header" style="border-bottom: 1px solid rgba(255, 140, 0, 0.3); padding: 1.5rem;">
                            <div style="width: 100%;">
                                <!-- Badges -->
                                <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                                    <span class="badge" style="background: ${categoryColor}; padding: 8px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; text-transform: uppercase;">
                                        ${challenge.category}
                                    </span>
                                    <span class="badge" style="background: ${difficultyColor}; padding: 8px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; text-transform: uppercase;">
                                        ${difficultyBadge}
                                    </span>
                                </div>
                                
                                <!-- Título -->
                                <h2 style="color: #FF8C00; font-family: 'Orbitron', sans-serif; font-size: 2rem; font-weight: 700; margin-bottom: 15px; text-shadow: 0 0 10px rgba(255, 140, 0, 0.5);">
                                    ${challenge.name}
                                </h2>
                                
                                <!-- Informações -->
                                <div style="display: flex; gap: 20px; color: #a0a0a0; font-size: 0.95rem;">
                                    <span style="display: flex; align-items: center; gap: 5px;">
                                        🏆 <strong style="color: #FF8C00;">${challenge.value}</strong> pontos
                                    </span>
                                    <span style="display: flex; align-items: center; gap: 5px;">
                                        👥 <strong style="color: #FF8C00;">${challenge.solves || 0}</strong> resoluções
                                    </span>
                                </div>
                            </div>
                            
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" style="filter: brightness(0) saturate(100%) invert(57%) sepia(76%) saturate(1676%) hue-rotate(360deg) brightness(103%) contrast(105%); opacity: 1; font-size: 1.5rem;"></button>
                        </div>
                        
                        <!-- Modal Body -->
                        <div class="modal-body" style="padding: 2rem;">
                            
                            <!-- Descrição -->
                            <div style="margin-bottom: 2rem; padding-left: 20px; border-left: 4px solid #FF8C00; background: rgba(255, 140, 0, 0.05); padding: 20px; border-radius: 8px;">
                                <p style="color: #e0e0e0; font-size: 1.05rem; line-height: 1.8; margin: 0;">
                                    ${challenge.description || 'Sem descrição disponível'}
                                </p>
                            </div>
                            
                            ${filesHTML}
                            ${connectionHTML}
                            
                            <!-- Submeter Flag -->
                            <div style="margin-bottom: 1rem;">
                                <h5 style="color: #FF8C00; font-family: 'Orbitron', sans-serif; font-size: 1.2rem; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                                    🚩 Submeter Flag
                                </h5>
                                <form id="customChallengeSubmitForm">
                                    <div style="display: flex; gap: 15px; align-items: stretch;">
                                        <input 
                                            type="text" 
                                            id="customFlagInput"
                                            class="form-control" 
                                            placeholder="ALQMIA{sua_flag_aqui}" 
                                            required
                                            style="flex: 1; background: rgba(255, 255, 255, 0.05); border: 2px solid rgba(255, 140, 0, 0.3); color: #e0e0e0; padding: 15px 20px; border-radius: 8px; font-size: 1rem; transition: all 0.3s ease;"
                                        >
                                        <button 
                                            type="submit" 
                                            class="btn" 
                                            style="background: linear-gradient(135deg, #FF8C00 0%, #FFA500 100%); color: white; padding: 15px 40px; border-radius: 8px; font-weight: 700; font-size: 1rem; text-transform: uppercase; border: none; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(255, 140, 0, 0.4);"
                                        >
                                            SUBMETER
                                        </button>
                                    </div>
                                </form>
                                <div id="customChallengeFeedback" style="margin-top: 15px; padding: 12px 20px; border-radius: 8px; display: none; font-weight: 600;"></div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        `;
        
        return modalHTML;
    }
    
    // Função para submeter a flag
    async function submitFlag(challengeId, submission) {
        try {
            const response = await fetch('/api/v1/challenges/attempt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'CSRF-Token': getCSRFToken()
                },
                body: JSON.stringify({
                    challenge_id: parseInt(challengeId),
                    submission: submission
                })
            });
            
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Erro ao submeter flag:', error);
            return { success: false, data: { status: 'error' } };
        }
    }
    
    // Função para abrir o modal customizado
    async function openCustomChallengeModal(challengeId) {
        // Remover modal existente se houver
        const existingModal = document.getElementById('customChallengeModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Buscar dados do desafio
        const challenge = await fetchChallengeData(challengeId);
        
        if (!challenge) {
            alert('Erro ao carregar desafio. Tente novamente.');
            return;
        }
        
        // Criar e inserir o modal no DOM
        const modalHTML = createCustomModal(challenge);
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Inicializar o modal do Bootstrap
        const modalElement = document.getElementById('customChallengeModal');
        const modal = new bootstrap.Modal(modalElement);
        
        // Adicionar event listener para o formulário de submissão
        const form = document.getElementById('customChallengeSubmitForm');
        const feedback = document.getElementById('customChallengeFeedback');
        const input = document.getElementById('customFlagInput');
        
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submission = input.value.trim();
            if (!submission) return;
            
            // Desabilitar botão durante submissão
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'ENVIANDO...';
            
            // Submeter flag
            const result = await submitFlag(challenge.id, submission);
            
            // Mostrar feedback
            feedback.style.display = 'block';
            if (result.success && result.data && result.data.status === 'correct') {
                feedback.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
                feedback.style.color = 'white';
                feedback.textContent = '✅ Correto! Parabéns!';
                
                // Recarregar a página após 2 segundos
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                feedback.style.background = 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)';
                feedback.style.color = 'white';
                feedback.textContent = '❌ Incorreto. Tente novamente!';
                
                // Reabilitar botão
                submitBtn.disabled = false;
                submitBtn.textContent = 'SUBMETER';
                
                // Limpar feedback após 5 segundos
                setTimeout(() => {
                    feedback.style.display = 'none';
                }, 5000);
            }
        });
        
        // Adicionar focus no input quando o modal abrir
        input.focus();
        
        // Limpar modal do DOM quando fechar
        modalElement.addEventListener('hidden.bs.modal', function() {
            modalElement.remove();
        });
        
        // Mostrar o modal
        modal.show();
    }
    
    // Interceptar cliques nos cards de desafios
    document.addEventListener('click', function(e) {
        const challengeCard = e.target.closest('[data-challenge-id]');
        if (challengeCard) {
            e.preventDefault();
            const challengeId = challengeCard.getAttribute('data-challenge-id');
            openCustomChallengeModal(challengeId);
        }
    });
    
    // Expor função globalmente para uso externo se necessário
    window.openCustomChallengeModal = openCustomChallengeModal;
    
})();

